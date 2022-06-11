import { Children, useEffect, useState, cloneElement } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import './carousel.css'

const PAGE_WIDTH = 1024
const PAGE_HEIGHT = 768

const Carousel = ({ children, buttons }) => {

   const [pages, setPages] = useState([])
   const [activeButtons, setActiveButtons] = useState(false)
   const [activeIndex, setActiveIndex] = useState(0)
   const [clickX, setClickX] = useState(null)



   const next = () => {
      if (activeIndex < (children.length - 1)) {
         setActiveIndex(prevState => prevState + 1)
      } else {
         setActiveIndex(0)
      }
   }

   const prev = () => {
      if (activeIndex > 0) {
         setActiveIndex(prevState => prevState - 1)
      } else {
         setActiveIndex(pages.length - 1)
      }
   }

   const toMain = () => {
      setActiveIndex(0)
   }

   const log = () => {
      console.log('log!')

   }

   const startDrag = (e) => {
      setClickX(e.pageX)
   }

   const dragging = (e) => {
      if (clickX === null) {
         return
      }
      const dragShift = clickX - e.pageX;

      if (dragShift > 5) {
         next()
      }

      if (dragShift < -5) {
         prev()
      }

      setClickX(null)
   }

   useEffect(() => {
      setActiveButtons(buttons)
      setPages(
         Children.map(children, child => {
            return cloneElement(child, {
               style: {
                  minWidth: `${PAGE_WIDTH}px`,
                  maxWidth: `${PAGE_WIDTH}px`
               },
               next: next,
               prev: prev,
            })
         })
      )
   }, [])

   return (
      <div className='carousel-container'>
         <div className="window"
            onPointerDown={startDrag}
            onPointerMove={dragging}>
            <AppHeader toMain={toMain} />
            <div
               className="all-pages-container"
               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >{pages}</div>
            {
               activeButtons &&
               <button onClick={prev} className="left-arrow">
                  &lt;
               </button>
            }
            {
               activeButtons &&
               <button onClick={next} className="right-arrow">
                  &gt;
               </button>
            }
         </div>
      </div>
   )
}

export default Carousel