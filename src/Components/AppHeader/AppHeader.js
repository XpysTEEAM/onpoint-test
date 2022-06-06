import './appHeader.scss';

const AppHeader = () => {
   return (
      <header className="app__header">
         <nav className="app__menu">
            <ul>
               <li><a href="" className="home"><i className="material-icons">home</i></a></li>
               |
               <li>PROJECT</li>
            </ul>
         </nav>
      </header >
   )
}

export default AppHeader