export function RestCard(props) {
  return (
    <div className="d-flex p-3 flex-column mb-10 ">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt={props.image} />
        <div className="card-body">
          <h4 className="card-title"> Restaurante: {props.title}</h4>
          <h5 className="card-title"> Tipo: {props.type}</h5>
          <h5 className="card-title"> Avaliação: {props.avaliation}</h5>
        </div>
      </div>
    </div>
  );
}
