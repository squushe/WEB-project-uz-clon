import { useState } from "react";

export default function BookingForm({ onSubmit, selectedCount }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Оформлення квитків (обрано: {selectedCount})</h3>
      <input
        required
        type="text"
        name="name"
        placeholder="ПІБ"
        onChange={handleChange}
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder="Телефон"
        onChange={handleChange}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn-success"
        disabled={selectedCount === 0}
      >
        Підтвердити бронювання
      </button>
    </form>
  );
}
