import Carousel from '../carousel/Carousel'
import '../../App.css';
import MainPage from '../Pages/MainPage/MainPage';

function App() {
   return (
      <Carousel>
         <MainPage />
         <div className='item item-1'>item 1</div>
         <div className='item item-2'>item 2</div>
         <div className='item item-3'>item 3</div>

         {/* <ScrollPage/> */}
         {/* <ProductPage/> */}
      </Carousel>
   );
}

export default App;
