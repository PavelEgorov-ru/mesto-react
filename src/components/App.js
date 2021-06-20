// корневой компонент
import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js'
import Footer from './Footer/Footer.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  const [selectCard, setSelectCard] = React.useState({})

  const handleCardClick = (card) => {
    setSelectCard(card)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectCard({})
  }

  return (
    <>
      <div className="page__container">
        <Header/>
        <Main onEditProfile = {handleEditProfileClick} 
              onAddPlace = {handleAddPlaceClick} 
              onEditAvatar = {handleEditAvatarClick}
              onCardClick = {handleCardClick} 
        /> 
        <Footer/>        
      </div>

      <PopupWithForm isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups} name = 'profile' title = 'Редактировать профиль' 
      button = 'Сохранить'>
        <div className="popup__item-container">
          <input type="text" name="name" className="popup__item popup__item_el_name"  placeholder="имя" id="input-name" minLength ="2" maxLength = "40" required />
          <span className="popup__error-input" id="input-name--error"></span>
        </div>
        <div className="popup__item-container">
          <input type="text" name="about" className="popup__item popup__item_el_comment"  placeholder="o себе" id="input-comment" minLength ="2" maxLength = "200" required/>
          <span className="popup__error-input" id="input-comment--error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} name = 'card' title = 'Новое место'
      button = 'Сохранить'>
        <div className="popup__item-container">
          <input type="text" name="name" className="popup__item popup__item_el_place"  placeholder="название" id="input-place" minLength ="2" maxLength = "30" required/>
          <span className="popup__error-input" id="input-place--error"></span>
        </div>        
        <div className="popup__item-container">
          <input type="url" name="link" className="popup__item popup__item_el_link" id="input-link"  placeholder="ссылка на картинку" required/>
          <span className="popup__error-input" id="input-link--error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups} name = 'avatar' title = 'Изменить фотографию'
      button = 'Сохранить'>
        <div className="popup__item-container">
          <input type="url" name="avatar" className="popup__item popup__item_el_link" id="input-avatar"  placeholder="ссылка на картинку" required />
          <span className="popup__error-input" id="input-avatar--error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup card = {selectCard} onClose = {closeAllPopups} />
    </>
  );
}

export default App;
