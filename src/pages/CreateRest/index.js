import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { RestCard } from "../../components/RestCard";

export function CreateRest() {
  const [form, setForm] = useState({
    owner: "",
    restName: "",
    restType: "",
    restAvaliation: "",
  });

  const [Rest, setRest] = useState("");

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
            <button type="button" onClick={handleAddRest}>
              Adicionar restaurante
            </button>

            {/* {addRest && (
              <div>
                <h2>Some content</h2>
              </div>
            )} */}

            {addRest && (
              <RestCard
                image="https://www.peninsula.com/-/media/images/paris/new/dining/loiseau-blanc/ppr-oiseau-blanc-interior-evening-1074/ppr-oiseaublanc.png?mw=987&hash=58953560C2A423F8B8D6B9EE0D7271CC"
                title={form.restName}
                type={form.restType}
                avaliation={form.restAvaliation}
              />
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-success"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
