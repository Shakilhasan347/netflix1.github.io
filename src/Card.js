import './index.css';
function Card( props){
  return <div className="Card">

  
   
    <div className="container">
    <img src={props.cardimg} alt="Thist is Netflix serise" />
 <h3>{props.heading}</h3>
 <h2>{props.name}</h2>
 <button> Watch Now</button>
    </div>

  </div>
}
export default Card;