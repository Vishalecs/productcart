import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Experience high-quality sound with these wireless headphones.",
      image: " /image/MQTR3.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "A high-performance smartphone with an amazing camera.",
      image: "/image/smart.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      description: "Portable and powerful for work and play i9 processor 32gb RAM.",
      image: "/image/lp.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Track your fitness and stay connected on the go and long battery life.",
      image: "/image/watch.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Enjoy your favorite music anywhere with this portable speaker.",
      image: "/image/speaker.jpg",
    },
    {
      id: 6,
      name: "Gaming Console",
      description: "Immerse yourself in the world of gaming with this console.",
      image: "image/ps.jpg",
    },
    {
      id: 7,
      name: "4K TV",
      description: "Stunning visuals with ultra HD resolution for your entertainment.",
      image: "image/tvvvv.jpg",
    },
    {
      id: 8,
      name: "Digital Camera",
      description: "Capture memories in high resolution with this camera.",
      image: "image/ccc.jpg",
    },
    {
      id: 9,
      name: "Wireless Mouse",
      description: "Ergonomic and precise for your everyday computing needs.",
      image: "/image/m.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      description: "Versatile and portable for reading, browsing, and entertainment.",
      image: "/image/tbb.jpg",
    },
    {
      id: 11,
      name: "Fitness Band",
      description: "Track your daily activities and monitor your health and long battery life.",
      image: "/image/fi.png",
    },
    {
      id: 12,
      name: "Drone",
      description: "Explore aerial photography and videography with this drone.",
      image: "/image/dr.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
