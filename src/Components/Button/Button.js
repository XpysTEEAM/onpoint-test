import './button.scss'

const Button = (props) => {

   const clickHandler = () => {
      console.log(props)
      props.log()
      props.next()
   }

   return (
      <button
         className='button-main'
         onClick={clickHandler}>

         <div className='button-main__circle'>
            <div className="button-main__shadow">
               <div className="button-main__arrow">
                  &#8594;
               </div>
            </div>
         </div>
         <div className="button-main__text">
            {props.text}
         </div>
      </button>
   )
}

export default Button