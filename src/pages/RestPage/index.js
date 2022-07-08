import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavBar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function RestPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rest, setRest] = useState({});
  console.log(rest);

  useEffect(() => {
    async function fetchRest() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/rarena-project2/${id}`
        );
        setRest(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRest();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/rarena-project2/${id}`
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />
      <div className="card" style={{ width: "18rem" }}>
        <h5 className="card-title">{`Restaurantes do ${rest.owner}`} </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            Nome do restaurante: {rest.restName}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            Tipo do Restaurante: {rest.restType}{" "}
          </li>
          <li className="list-group-item">
            Avaliação do Restaurante: {rest.restAvaliation}
          </li>
        </ul>
        <Link to={`/editrest/${id}`} className="btn btn-primary">
          Editar
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Excluir
        </button>
      </div>
      <Footer />
    </>
  );
}
