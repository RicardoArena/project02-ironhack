import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { RestCard } from "../../components/RestCard";
import { NavBar } from "../../components/Navbar";

export function CreateRest() {
  const [form, setForm] = useState({
    owner: "",
    restName: "",
    restType: "",
    restAvaliation: "",
  });

  // const [rest, setRest] = useState({
  //   favRests: [],
  // });

  const [addRest, setAddRest] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleAddRest() {
    setAddRest(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/rarena-project2", form);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Toaster />
      <NavBar />
      <div>
        <h1>Avalie seus restaurantes prediletos!</h1>

        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <div className="d-flex flex-column m-5">
            <label htmlFor="owner-input">Seu nome:</label>
            <input
              id="owner-input"
              value={form.owner}
              type="string"
              name="owner"
              onChange={handleChange}
            />

            <label htmlFor="restName-input">Nome do restaurante:</label>
            <input
              id="restName-input"
              value={form.restName}
              type="string"
              name="restName"
              onChange={handleChange}
            />

            <label htmlFor="restType-input">Tipo do restaurante:</label>
            <input
              id="restType-input"
              value={form.restType}
              type="string"
              name="restType"
              onChange={handleChange}
            />

            <label htmlFor="restAvaliation-input">
              Avaliação do restaurante(0 a 10):
            </label>
            <input
              id="restAvaliation-input"
              value={form.restAvaliation}
              type="string"
              name="restAvaliation"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="btn btn-primary btn-lg"
              // type="button"
              onClick={handleAddRest}
            >
              Adicionar restaurante
            </button>

            {addRest && (
              <RestCard
                image="https://wesco.com.br/wp-content/uploads/2019/08/tres-razoes-que-deixam-os-donos-de-restaurantes-acordados-noite-e-tres-curas.jpg"
                title={form.restName}
                type={form.restType}
                avaliation={form.restAvaliation}
              />
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-success btn-lg"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
