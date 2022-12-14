import { useState } from "react"
import './Item.css'
const Item = ({data}) => {
  const {name, img, options} = data;
  const [showLogo, setShowLogo] = useState(true)
  const handleClick = () => {
    // setShowLogo(showLogo ? false : true)
    setShowLogo(!showLogo)
  }

  return (
    <div className="card" onClick={handleClick}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            console.log(element)
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  )
}

export default Item