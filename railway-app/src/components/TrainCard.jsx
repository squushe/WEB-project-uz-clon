import { Link } from "react-router-dom";

export default function TrainCard({ train }) {
  return (
    <div className="train-card">
      <div className="train-header">
        <h3>Потяг {train.number}</h3>
        <span className="route">{train.route}</span>
      </div>
      <div className="train-details">
        <p>
          <strong>Відправлення:</strong> {train.departureDate} о{" "}
          {train.departureTime}
        </p>
        <p>
          <strong>Час у дорозі:</strong> {train.duration}
        </p>
      </div>
      <Link to={`/booking/${train.id}`} className="btn-primary">
        Вибрати місця
      </Link>
    </div>
  );
}
