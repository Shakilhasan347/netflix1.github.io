import Card from "./Card";
import Sdata from './Components/Sdata'
import './index.css';
let x;
function item(val){
 return (
  <Card 
    cardimg={val.cardimg}
    heading={val.heading}
    name={val.name}
    link={val.link} />
 );

}

function App() {
  return (
    <div className="App">
    {Sdata.map(item)};
      </div>
  );
}
export default App;

