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
      <h2 className="mx-3 my-3">Restaurantes da comunidade:</h2>
      <div className="d-flex flex-wrap mx-3 my-3 gap-5 ">
        {rests.map((currentElement) => {
          return (
            <div className="d-flex flex-wrap mx3 my3">
              <HomeCard owner={currentElement.owner} id={currentElement._id} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
