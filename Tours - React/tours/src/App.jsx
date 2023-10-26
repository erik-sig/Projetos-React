import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./components/Tours";

function App() {
  const URL = "https://course-api.com/react-tours-project";

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Data</h2>
        <button className='btn' onClick={() => fetchTours()}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
