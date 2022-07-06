export function RestCard(props) {
  return (
    <div className="d-flex p-3 flex-column mb-10 ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt={props.image} />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Restaurante: {props.title}</li>
          <li class="list-group-item">Tipo: {props.type}</li>
          <li class="list-group-item">Avaliação: {props.avaliation}</li>
        </ul>
      </div>
    </div>
  );
}
