import React from 'react';
import newApi from './../../utils/api.js'
import Card from './../Card/Card.js'
import avatarEdit from './../../images/Vector_pen.svg';
import profileEdit from './../../images/Vector_plus.svg';

function Main (props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')

  const [cards, setCards ] = React.useState([])


  React.useEffect(() => {
    Promise.all([newApi.newUserInfo(), newApi.getCards()])
    .then(([userData, cardData]) => {
    setUserName(userData.name);
    setUserDescription(userData.about)
    setUserAvatar(userData.avatar)
    setCards(cardData)
    })
    .catch((error) => {
    console.log(error)
    })
    }, []) 
  

  return (
    <main className="content section section_size_wide">
      <section className="profile section section_size_wide">
        <div className="profile__info">
          <div className="profile__avatar">
            <button type="button" onClick = {props.onEditAvatar} className="profile__avatar-btn">
              <img src={userAvatar} alt = "фото пользователя" className="profile__avatar-image"/>
            </button>
          </div>
          <article className="profile__texts">
            <div className="profile__rows">
              <h1 className="profile__title">{userName}</h1>
              <img src={avatarEdit} alt="иконка редактирования профиля" onClick = {props.onEditProfile} className="profile__edit-button opacity"/>
            </div>
            <h2 className="profile__subtitle">{userDescription}</h2>
          </article>
        </div>
        <img src={profileEdit} alt="добавить карточку" onClick = {props.onAddPlace} className="profile__button profile__button-card opacity"/>
      </section>
      <section className="cards section section_size_wide">
        {cards.map((card) => {
          return <Card key = {card._id} card = {card} onCardClick = {props.onCardClick}/>
        })}
      </section>
    </main>
  )
}

export default Main