import { Link } from "react-router-dom";
import { HomeCard } from "../../components/HomeCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function Home() {
  const [rests, setRests] = useState([]);

  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

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
          <h1 className="mt-5" style={{ margin: "50px" }}>
            Crie uma coleção com seus restaurantes favoritos!
          </h1>
          <Link to="/createrest" className="lead">
            <button className="btn btn-success">
              Clique aqui para começar
            </button>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <input
          className="placeholder-glow col-4 mx-4 my-4"
          name="search"
          placeholder="Pesquise seu restaurante"
          onChange={handleSearch}
        />
      </div>

      <h2 className="mx-4 my-4">Restaurantes da comunidade:</h2>
      <div className="h-auto d-inline-block">
        <div className="d-flex flex-wrap mx-3 my-3 gap-5">
          {rests
            .filter((currentElement) => {
              return currentElement.owner
                .toLowerCase()
                .includes(search.toLowerCase());
            })
            .map((currentElement) => {
              return (
                <div className="d-flex flex-wrap mx3 my3">
                  <HomeCard
                    owner={currentElement.owner}
                    id={currentElement._id}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
