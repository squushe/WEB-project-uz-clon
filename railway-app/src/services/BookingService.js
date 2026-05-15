const STORAGE_KEY = "railway_bookings";

export const BookingService = {
  getBookedSeats: (trainId, wagonId) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return data[`${trainId}_${wagonId}`] || [];
  },

  saveBooking: (trainId, wagonId, seats) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const key = `${trainId}_${wagonId}`;
    const existingSeats = data[key] || [];

    data[key] = [...existingSeats, ...seats];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};
