import {languages} from '../../data/data.js'
import Item from '../Item/Item.jsx';
import './Card.css'


const Card = () => {
  console.log(languages); 
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
         {
          languages.map((item) => {
          return <Item  data={item}/>
          })
         }
      </div>
    </div>
  )
}

export default Card