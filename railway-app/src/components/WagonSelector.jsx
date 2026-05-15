export default function WagonSelector({ wagons, selectedWagon, onSelect }) {
  return (
    <div className="wagon-selector">
      <h3>Виберіть вагон:</h3>
      <div className="wagon-buttons">
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            className={`btn-wagon ${selectedWagon?.id === wagon.id ? "active" : ""}`}
            onClick={() => onSelect(wagon)}
          >
            Вагон {wagon.number} ({wagon.type})
          </button>
        ))}
      </div>
    </div>
  );
}
