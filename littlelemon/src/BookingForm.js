import { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, handleTimeUpdate, submitForm }) => {
  const date = new Date();
  const currentDate = date.toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    date: currentDate,
    time: "",
    guests: 1,
    occasion: "",
  });

  const availableOccasions = ["Birthday", "Anniversary", "Christmas"];

  const [errorMessage, setErrorMessage] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleDateChange = (e) => {
    handleTimeUpdate(e.target.value);
    setFormData({ ...formData, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handleGuestsChange = (e) => {
    if (e.target.value > 9 || e.target.value < 1) {
      setErrorMessage({
        ...errorMessage,
        guests: "Allowed guests between 1 and 9",
      });
    } else {
      setErrorMessage({ ...errorMessage, guests: "" });
    }
    setFormData({ ...formData, guests: e.target.value });
  };

  const handleOccasionChange = (e) => {
    setFormData({ ...formData, occasion: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  useEffect(() => {
    if (!availableTimes.length > 0) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        date: "Date Not Available",
      }));
    } else {
      setErrorMessage((prevErrors) => ({ ...prevErrors, date: "" }));
    }
  }, [availableTimes]);

  return (
    <div className='reservationForm'>
      <form style={{ display: "grid", justifyContent: "center", gap: "20px" }}>
        <label htmlFor='res-date' className='cardTitle'>
          Date
        </label>
        <input
          type='date'
          id='res-date'
          className='inputBox'
          value={formData.date}
          onChange={handleDateChange}
          min={currentDate}
          max={"2024-01-23"}
          aria-label='Reservation Date'
          aria-invalid={Boolean(errorMessage.date)}
          aria-describedby={errorMessage.date ? "date-error" : undefined}
        />
        {errorMessage.date && (
          <p id='date-error' role='alert' className='errorMessage'>
            {errorMessage.date}
          </p>
        )}

        <label htmlFor='res-time' className='cardTitle'>
          Time
        </label>
        <select
          id='res-time'
          data-testid='res-time'
          className='inputBox'
          placeholder='Select Time'
          value={formData.time}
          onChange={handleTimeChange}
        >
          {availableTimes?.length > 0 ? (
            availableTimes.map((time) => {
              return (
                <option data-testid='timeOption' key={time}>
                  {time}
                </option>
              );
            })
          ) : (
            <option data-testid='timeOption'>Please Select Valid Date</option>
          )}
        </select>

        <label htmlFor='guests' className='cardTitle'>
          Number of Guests
        </label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='9'
          id='guests'
          name='guests'
          className='inputBox'
          value={formData.guests}
          onChange={handleGuestsChange}
          required
          aria-label='Number of Guests'
          aria-invalid={Boolean(errorMessage.guests)}
          aria-describedby={errorMessage.guests ? "guests-error" : undefined}
        />
        {errorMessage.guests && (
          <p id='guests-error' role='alert' className='errorMessage'>
            {errorMessage.guests}
          </p>
        )}

        <label htmlFor='occasion' className='cardTitle'>
          Occasion
        </label>
        <select
          id='occasion'
          className='inputBox'
          value={formData.occasion}
          onChange={handleOccasionChange}
        >
          {availableOccasions.map((occasion) => {
            return <option key={occasion}>{occasion}</option>;
          })}
        </select>

        <input
          type='submit'
          data-testid='submitButton'
          value='Make Your Reservation'
          className='button cardTitle'
          onClick={handleSubmit}
          disabled={
            errorMessage.date ||
            errorMessage.guests ||
            errorMessage.time ||
            errorMessage.occasion
          }
        />
      </form>
    </div>
  );
};

export default BookingForm;
