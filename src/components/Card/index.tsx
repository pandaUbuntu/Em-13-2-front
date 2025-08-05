import './style.css'
import type { CardDataType } from '../../types/cards'


const Card = (props: CardDataType) =>{

  return (
    <div className="card">
        <p className="heading">{props.title}</p>
        <p>{props.shortText}</p>
        <p>{props.linkText}</p>
    </div>
  )
}


export default Card
