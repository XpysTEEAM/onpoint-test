import './appHeader.scss';

const AppHeader = (props) => {

   const toMain = (e) => {
      e.preventDefault()
      props.toMain()
   }

   return (
      <header className="app__header container">
         <nav className="app__menu">
            <ul>
               <li><a href=""
                  className="app__home home"
                  onClick={(e) => toMain(e)}
               ><i className="material-icons">home</i></a></li>
               <li className="app__separator">|</li>
               <li className='app__name'>PROJECT</li>
            </ul>
         </nav>
      </header >
   )
}

export default AppHeader