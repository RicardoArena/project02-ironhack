import { Link } from "react-router-dom";
import { HomeCard } from "../../components/HomeCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

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
      <NavBar />
      <div className="container">
        <div className="text-center">
          <h1 className="mt-5">
            Crie uma coleção com seus restaurantes favoritos!
          </h1>
          <Link to="/createrest" className="lead">
            <button className="btn btn-success">
              Clique aqui para começar
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2>Restaurantes da comunidade:</h2>

        {rests.map((currentElement) => {
          return (
            <HomeCard owner={currentElement.owner} id={currentElement._id} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
