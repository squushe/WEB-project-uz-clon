export default function SeatMap({
  wagon,
  bookedSeats,
  selectedSeats,
  onSeatClick,
}) {
  if (!wagon) return null;

  const totalSeats = Array.from({ length: wagon.seats }, (_, i) => i + 1);

  return (
    <div className="seat-map-container">
      <h3>Схема місць (Вагон {wagon.number})</h3>

      <div className="legend">
        <span className="legend-item">
          <div className="seat free"></div> Вільне
        </span>
        <span className="legend-item">
          <div className="seat selected"></div> Обране
        </span>
        <span className="legend-item">
          <div className="seat booked"></div> Зайняте
        </span>
      </div>

      <div className="seat-grid">
        {totalSeats.map((seatNumber) => {
          const isBooked = bookedSeats.includes(seatNumber);
          const isSelected = selectedSeats.includes(seatNumber);

          let seatClass = "free";
          if (isBooked) seatClass = "booked";
          if (isSelected) seatClass = "selected";

          return (
            <button
              key={seatNumber}
              disabled={isBooked}
              className={`seat ${seatClass}`}
              onClick={() => onSeatClick(seatNumber)}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}
