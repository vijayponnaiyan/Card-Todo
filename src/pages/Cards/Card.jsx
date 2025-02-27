import { useState, useEffect } from "react";
import { fetchcard } from "../../api/data.js";
import Loader from "../../components/ui/Loader.jsx";
import ErrorState from "../../components/ui/ErrorState";
import CardItem from "../../pages/Cards/Components/CardItem";

export default function Card() {
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetchcard();
      console.log("Fetched Data:", response); // Debugging: Check if images are present
      setCarts(response || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loader height="true" />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="p-20">
      <h2 className="text-gray-800 text-xl font-bold mb-4">Card List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <CardItem
            key={cart.id}
            title={cart.title}
            content={cart.content}
            image={cart.image} // Ensure API returns this
          />
        ))}
      </div>
    </div>
  );
}
