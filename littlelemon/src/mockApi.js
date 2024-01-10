const availableTimesByDate = {
  "2024-01-02": ["09:00", "11:00", "12:00", "13:00", "14:00"],
  "2024-01-03": ["09:00", "11:00", "12:00"],
  "2024-01-04": ["10:00", "11:00", "12:00"],
  "2024-01-05": ["14:00", "15:00", "16:00"],
  "2024-01-06": ["08:00", "11:00", "12:00"],
  "2024-01-07": ["13:00", "15:00", "16:00"],
  "2024-01-08": ["07:00", "11:00", "12:00"],
  "2024-01-09": ["12:00", "15:00", "16:00"],
  "2024-01-10": ["06:00", "11:00", "12:00"],
  "2024-01-11": ["10:00", "15:00", "16:00"],
  "2024-01-12": ["05:00", "11:00", "12:00"],
  "2024-01-13": ["11:00", "15:00", "16:00"],
  "2024-01-14": ["06:00", "11:00", "12:00"],
  "2024-01-15": ["07:00", "15:00", "16:00"],
  "2024-01-16": ["02:00", "11:00", "12:00"],
  "2024-01-17": ["01:00", "15:00", "16:00"],
  "2024-01-18": ["06:00", "11:00", "12:00"],
  "2024-01-19": ["09:00", "15:00", "16:00"],
  "2024-01-20": ["08:00", "11:00", "12:00"],
  "2024-01-21": ["07:00", "15:00", "16:00"],
  "2024-01-22": ["10:00", "11:00", "12:00"],
  "2024-01-23": ["12:00", "15:00", "16:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject("No available times for the selected date.");
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
