import backet from '../../images/Group2.png'

 function Card (props) {
  
  function handleClickCard () {
    props.onCardClick(props.card)
  }

  return (
  <article className="cards__element">
    <img src={backet} alt="кнопка удалить" className="cards__delete-icon  opacity" />
    <img className="cards__image" src = {props.card.link}  alt = {props.card.name} onClick = {handleClickCard}/>
    <div className="cards__content">
      <p className="cards__text"> {props.card.name} </p>
      <div className="cards__block-like">
        <div className="cards__button-like opacity" />
        <p className="cards__number-like"> {props.card.likes.length} </p>
      </div>          
    </div>         
  </article>
  )
   
}

export default Card