import React from 'react'

import Button from '../../Button/Button'

import './mainPage.scss'

const MainPage = (props) => {

   console.log(props)

   return (
      <div className="background-main">
         <div className="main-page__container container">
            <h2 className='main-page__secondary-text'>ПРИВЕТ,</h2>
            <h1 className='main-page__primary-text'>ЭТО
               <span className='ExtraBold'> НЕ </span>
               КОММЕРЧЕСКОЕ ЗАДАНИЕ
               <div className="main-page__button">
                  <Button text='Что дальше?' next={props.next} log={props.log} />
               </div>
            </h1>
            <div className="main-page__logo">
               <img src="../resources/img/logo.png" alt="logo" />
            </div>
         </div>
      </div>
   )
}

export default MainPage