import { Link } from "react-router-dom";

export function HomeCard(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/food-and-drink/restaurants/sketch/sketch-restaurant-the-gallery-yellow-2022-640x360.jpg?mw=640&hash=04D57E17D11D4A9B7969F290056583F42EB282E0"
          class="card-img-top"
          alt="restaurant"
        />
        <div className="card-body">
          <h5 className="card-title">{`Restaurante do ${props.owner}`} </h5>
          <Link to={`/rest/${props.id}`} class="btn btn-primary">
            Veja os restaurantes selecionados
          </Link>
        </div>
      </div>
    </>
  );
}
