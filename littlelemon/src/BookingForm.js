import { useState } from "react";

const BookingForm = ({ availableTimes, handleTimeUpdate, submitForm }) => {
  var date = new Date();
  var currentDate = date.toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    date: currentDate,
    time: "",
    guests: 1,
    occasion: "",
  });

  const [availableOccasions, setAvailableOccasions] = useState([
    "Birthday",
    "Anniversary",
    "Christmas",
  ]);

  const handleDateChange = (e) => {
    handleTimeUpdate(e.target.value);
    setFormData({ ...formData, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const handleGuestsChange = (e) => {
    setFormData({ ...formData, guests: e.target.value });
  };

  const handleOccasionChange = (e) => {
    setFormData({ ...formData, occasion: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

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
        />
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
            <option data-testid='timeOption'>Please Select Date</option>
          )}
        </select>
        <label htmlFor='guests' className='cardTitle'>
          Number of Guests
        </label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          className='inputBox'
          value={formData.guests}
          onChange={handleGuestsChange}
        />
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
          value='Make Your Reservation'
          className='button cardTitle'
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default BookingForm;
