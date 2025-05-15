import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Thank you for booking! I’ll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      sessionType: "",
      date: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="bg-white py-16 px-6 md:px-16 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Book a Session</h2>

          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="sessionType"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.sessionType}
              onChange={handleChange}
              required
            >
              <option value="">Select Session Type</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="commercial">Commercial</option>
            </select>

            <input
              type="date"
              name="date"
              className="p-3 border border-gray-300 rounded-md"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Additional details..."
              className="p-3 border border-gray-300 rounded-md"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Submit Booking
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-black text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-2">📍 Nairobi, Kenya</p>
          <p className="mb-2">📞 +254 712 345 678</p>
          <p className="mb-2">✉️ paper@photography.com</p>
          <p className="text-sm text-gray-300 mt-6">
            I usually respond within 24 hours. Feel free to reach out for custom projects too!
          </p>
        </div>
      </div>
    </section>
  );
}
