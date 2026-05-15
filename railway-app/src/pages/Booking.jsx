import { useParams, useNavigate } from "react-router-dom";
import { trains } from "../data/trains";

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();

  const train = trains.find((t) => t.id === trainId);

  if (!train) return <p className="container">Потяг не знайдено</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Назад до списку
      </button>
      <h2>
        Бронювання: Потяг {train.number} ({train.route})
      </h2>

      <div className="booking-layout">
        <p>Компоненти вибору місць будуть додані в наступному кроці...</p>
      </div>
    </div>
  );
}
