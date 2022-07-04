import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p>
        <Link to="/createrest">Adicione seus restaurantes favoritos!</Link>
      </p>
    </div>
  );
}
