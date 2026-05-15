import { useState } from "react";
import { trains } from "../data/trains";
import TrainList from "../components/TrainList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrains = trains.filter(
    (train) =>
      train.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      train.number.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Пошук залізничних квитків</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Пошук за містом або номером потяга..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <TrainList trains={filteredTrains} />
    </div>
  );
}
