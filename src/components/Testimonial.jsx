import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "SunuFarm transformed my farming business! The irrigation solutions are a game changer.",
      name: "Aminata S.",
      location: "The Gambia",
    },
    {
      quote: "I can’t recommend their consulting services enough. My yields have doubled!",
      name: "Ousman J.",
      location: "Senegal",
    },
    {
      quote: "The organic farming practices shared by SunuFarm have improved both the quality of my crops and my soil health.",
      name: "Fatou C.",
      location: "Guinea",
    },
    {
      quote: "Their renewable energy solutions have cut my costs and made my farm more sustainable.",
      name: "Mamadou B.",
      location: "Mali",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="testimonial">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              style={{
                alignSelf: index === 3 ? 'center' : 'auto', // Center the last item
              }}
            >
              <p className="italic text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
