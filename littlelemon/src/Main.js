import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "./mockApi";
import ConfirmedBooking from "./ConfirmedBooking";

export const initializeTimes = async () => {
  const date = new Date();
  var currentDate = date.toISOString().substring(0, 10);
  const availableTimes = await fetchAPI(currentDate);
  return availableTimes;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatchTimeChange] = useReducer(updateTimes, []);

  //Used for initializing time
  useEffect(() => {
    const fetchTimes = async () => {
      const times = await initializeTimes();
      dispatchTimeChange({ type: "SET_TIMES", payload: times });
    };
    fetchTimes();
  }, []);

  const handleTimeUpdate = async (date) => {
    let availableTimes = await fetchAPI(date);
    dispatchTimeChange({ type: "SET_TIMES", payload: availableTimes });
  };

  const submitForm = (formData) => {
    submitAPI(formData).then((success) => success && navigate("/confirmation"));
  };

  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/reservations'
          element={
            <BookingPage
              availableTimes={availableTimes}
              handleTimeUpdate={handleTimeUpdate}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
