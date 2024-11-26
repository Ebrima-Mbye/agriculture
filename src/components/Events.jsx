import React from "react";

const Events = () => {
  const events = [
    {
      title: "Farming 101 Workshop",
      date: "Dec 12, 2024",
      time: "2:00 PM GMT",
      zoomLink: "https://zoom.us/farming101",
      description: "Learn the basics of modern farming techniques, including soil preparation, irrigation, and crop rotation.",
    },
    {
      title: "Smart Tech for Crops",
      date: "Jan 15, 2025",
      time: "4:00 PM GMT",
      zoomLink: "https://zoom.us/smarttech",
      description: "Explore cutting-edge technology like AI and IoT tools to boost crop production and monitor soil health.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="events">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="space-y-4 text-center">
          {events.map((event, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date} | {event.time}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a
                href={event.zoomLink}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join on Zoom
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p>
            Questions? Contact us at{" "}
            <a
              href="mailto:contact@sunufarm.com"
              className="text-blue-500 underline"
            >
              contact@sunufarm.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
