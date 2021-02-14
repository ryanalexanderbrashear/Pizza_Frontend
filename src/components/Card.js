function Card(props) {
  return (
    <div className="card col-sm-12 col-md-6">
      <div className="card-body">
        <h5 class="card-title">{props.title}</h5>
        {props.children}
      </div>
    </div>
  );
}

export default Card;