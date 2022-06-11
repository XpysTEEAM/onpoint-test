
import '../../App.css';

import Carousel from '../carousel/Carousel'
import MainPage from '../Pages/MainPage/MainPage';
import ScrollPage from '../Pages/ScrollPage/ScrollPage';
import ProductPage from '../Pages/ProductPage/ProductPage';

function App() {
   return (
      <Carousel>
         <MainPage />
         <ScrollPage />
         {/* 
         <div className='item item-1'>item 1</div>
         <div className='item item-2'>item 2</div>
         <div className='item item-3'>item 3</div> */}


         <ProductPage />
      </Carousel >
   );
}

export default App;
