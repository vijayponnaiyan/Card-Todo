import React from "react";
import one from "../../../images/im-1.jpg";
import two from "../../../images/im-2.jpg";
import three from "../../../images/im-3.jpg";
import four from "../../../images/im-4.jpg";
import five from "../../../images/im-5.jpg";

export default function CardItem({ title, content, image }) {
  // Local fallback images
  const localImages = [one, two, three, four, five];

  // Select a random local image if no image is provided
  const randomLocalImage =
    localImages[Math.floor(Math.random() * localImages.length)];

  // Unsplash fallback images
  const unsplashImages = [
    "https://source.unsplash.com/random/300x200/?product",
    "https://source.unsplash.com/random/300x200/?electronics",
    "https://source.unsplash.com/random/300x200/?fashion",
    "https://source.unsplash.com/random/300x200/?gadgets",
    "https://source.unsplash.com/random/300x200/?furniture",
  ];

  // Select a random Unsplash image if needed
  const randomUnsplashImage =
    unsplashImages[Math.floor(Math.random() * unsplashImages.length)];

  // Final image logic: Use provided image → local random image → Unsplash image
  const imageSrc = image || randomLocalImage || randomUnsplashImage;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => (e.target.src = randomLocalImage)} // Fallback to local image
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
      </div>
    </div>
  );
}
