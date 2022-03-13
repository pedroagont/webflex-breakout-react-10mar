function Card(props) {
  const { name, link } = props;
  
  return (
    <div className="card">
      <h2 className="card-title">{ name }</h2>
      <a href={ link } className="card-link">See more!</a>
    </div>
  )
}

export default Card;
