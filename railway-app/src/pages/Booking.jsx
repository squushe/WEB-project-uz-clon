import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { trains } from "../data/trains";
import { BookingService } from "../services/BookingService";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find((t) => t.id === trainId);

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedWagon) {
      const bSeats = BookingService.getBookedSeats(trainId, selectedWagon.id);
      setBookedSeats(bSeats);
      setSelectedSeats([]); // скидаємо обрані місця при зміні вагону
    }
  }, [selectedWagon, trainId]);

  if (!train) return <p className="container">Потяг не знайдено</p>;

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBookingSubmit = (userData) => {
    BookingService.saveBooking(trainId, selectedWagon.id, selectedSeats);
    toast.success(`Квитки успішно заброньовано на ім'я ${userData.name}!`);
    navigate("/");
  };

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Назад до списку
      </button>
      <h2>
        Бронювання: Потяг {train.number} ({train.route})
      </h2>

      <div className="booking-layout">
        <div className="wagon-section">
          <WagonSelector
            wagons={train.wagons}
            selectedWagon={selectedWagon}
            onSelect={setSelectedWagon}
          />

          <SeatMap
            wagon={selectedWagon}
            bookedSeats={bookedSeats}
            selectedSeats={selectedSeats}
            onSeatClick={handleSeatClick}
          />
        </div>

        <div className="form-section">
          <BookingForm
            onSubmit={handleBookingSubmit}
            selectedCount={selectedSeats.length}
          />
        </div>
      </div>
    </div>
  );
}
