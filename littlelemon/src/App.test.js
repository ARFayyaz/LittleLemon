import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import App from "./App";
import Main, { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "./mockApi";

jest.mock("./mockApi", () => ({
  ...jest.requireActual("./mockApi"), // if there are other functions you don't want to mock
  fetchAPI: jest.fn(),
}));

test("renders the booking form heading", () => {
  render(<BookingPage availableTimes={["17:00", "18:00"]} />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

// test("check uinitialize times functions", () => {
//   render(<App />);

//   const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   expect(initializeTimes()).toEqual(expectedTimes);

//   const expectedUpdatedTimes = ["19:00", "20:00", "21:00", "22:00"];
//   expect(updateTimes()).toEqual(expectedUpdatedTimes);
// });

describe("initializeTimes", () => {
  it("should fetch and return available times for the current date", async () => {
    const mockTimes = ["09:00", "10:00"];
    fetchAPI.mockResolvedValueOnce(mockTimes);

    const times = await initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(String));
    expect(times).toEqual(mockTimes);
  });
});

describe("updateTimes reducer", () => {
  it("should return the new times when SET_TIMES action is dispatched", () => {
    const initialState = [];
    const newTimes = ["11:00", "12:00"];
    const action = { type: "SET_TIMES", payload: newTimes };

    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(newTimes);
  });

  it("should return the current state for unknown action types", () => {
    const initialState = ["09:00"];
    const action = { type: "UNKNOWN", payload: [] };

    const state = updateTimes(initialState, action);

    expect(state).toEqual(initialState);
  });
});

describe("Reservation Form HTML Attributes", () => {
  test("All input elements have HTML validation", () => {
    const handleTimeUpdate = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = ["09:00", "11:00", "12:00", "13:00", "14:00"];
    const date = new Date();
    const currentDate = date.toISOString().substring(0, 10);

    render(
      <BookingPage
        availableTimes={availableTimes}
        handleTimeUpdate={handleTimeUpdate}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText("Date");
    expect(dateInput).toHaveAttribute("min", currentDate);
    expect(dateInput).toHaveAttribute("max", "2024-01-23");
    expect(dateInput).toHaveAttribute("min", currentDate);

    const guestsInput = screen.getByLabelText("Number of Guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "9");
    expect(guestsInput).toHaveAttribute("required");
  });
});

describe("Reservation Form Validation Logic", () => {
  test("Form has proper validation functions", () => {
    const handleTimeUpdate = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = ["09:00", "11:00", "12:00", "13:00", "14:00"];
    const date = new Date();
    const currentDate = date.toISOString().substring(0, 10);

    render(
      <BookingPage
        availableTimes={availableTimes}
        handleTimeUpdate={handleTimeUpdate}
        submitForm={submitForm}
      />
    );

    const submitButton = screen.getByTestId("submitButton");

    const guestsInput = screen.getByLabelText("Number of Guests");
    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.click(submitButton);

    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
