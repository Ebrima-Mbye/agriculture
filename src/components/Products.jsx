import React from "react";

const Products = () => {
  const products = [
    { name: "Smart Irrigation Kit", price: "$299", image: "https://via.placeholder.com/150" },
    { name: "Organic Fertilizer", price: "$19", image: "https://via.placeholder.com/150" },
    { name: "Crop Monitoring App", price: "Free", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-16 bg-white" id="products">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg text-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
