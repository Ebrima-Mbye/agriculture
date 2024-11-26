import React from "react";

const Events = () => {
  const events = [
    { title: "Farming 101 Workshop", date: "Dec 12, 2024" },
    { title: "Smart Tech for Crops", date: "Jan 15, 2025" },
  ];

  return (
    <section className="py-16 bg-gray-100" id="events">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="space-y-4 text-center">
          {events.map((event, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
