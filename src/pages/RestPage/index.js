import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function RestPage() {
  const { id } = useParams();

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

  return (
    <>
      <h1>{`Restaurantes do ${rest.owner}`} </h1>
      <ul>
        <li> Nome do restaurante: {rest.restName} </li>
        <li> Tipo do Restaurante: {rest.restType} </li>
        <li> Avaliação do Restaurante: {rest.restAvaliation} </li>
      </ul>
    </>
  );
}
