import { Children, useEffect, useState, cloneElement } from 'react'
import './Carousel.css'

const PAGE_WIDTH = 1024

const Carousel = ({ children }) => {

   const [pages, setPages] = useState([])
   const [clickX, setClickX] = useState(0)
   const [dragX, setDragX] = useState(0)

   const dragging = (e) => {
      setDragX(e.pageX)
      console.log(e.pageX)
      const dragShift = dragX - clickX;
      // e.style.transform = `translate3d(${dragShift}px, 0, 0)`

      console.log('mooving')
   }

   const startDrag = (e) => {
      console.log(e.pageX, e)
      setClickX(e.pageX)
      e.target.addEventListener('pointermove', (e) => dragging(e))
   }

   const stopDrag = (e) => {
      console.log(e)
      e.target.removeEventListener('pointermove', dragging)
   }


   useEffect(() => {
      setPages(
         Children.map(children, child => {
            return cloneElement(child, {
               style: {
                  height: '100%',
                  minWidth: `${PAGE_WIDTH}px`,
                  maxWidth: `${PAGE_WIDTH}px`
               },

            })
         })
      )
   }, [])

   return (
      <div className='main-container'>
         <div className="window">
            <div
               className="all-pages-container"
               onPointerDown={(e) => startDrag(e)}
               onPointerUp={(e) => stopDrag(e)}
            >{pages}</div>
         </div>
      </div>
   )
}

export default Carousel