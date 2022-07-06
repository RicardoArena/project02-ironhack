import { Link } from "react-router-dom";
import { HomeCard } from "../../components/HomeCards";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [rests, setRests] = useState([]);

  useEffect(() => {
    async function fetchRests() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/rarena-project2"
      );
      setRests([...response.data]);
    }
    fetchRests();
  }, []);

  return (
    <>
      <div>
        <h1>
          <Link to="/createrest">Adicione seus restaurantes favoritos!</Link>
        </h1>
      </div>

      <div>
        <h2>Restaurantes da comunidade:</h2>

        {rests.map((currentElement) => {
          return (
            <HomeCard owner={currentElement.owner} id={currentElement._id} />
          );
        })}
      </div>
    </>
  );
}
