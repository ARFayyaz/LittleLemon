import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, handleTimeUpdate, submitForm }) => {
  return (
    <>
      <div className='reservationHeader'>
        <div className='displayTitle'>Book a Table</div>
        <div className='subtitle' style={{ marginTop: "20px" }}>
          Please fill out form below to check availability of date
        </div>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        handleTimeUpdate={handleTimeUpdate}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
