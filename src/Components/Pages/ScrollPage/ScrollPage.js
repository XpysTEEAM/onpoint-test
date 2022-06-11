import './scrollPage.scss'

const ScrollPage = (props) => {
   return (
      <div style={props.style} className="background-scroll" >
         <div className="scroll-page__container container">
            <h2 className='scroll-page__secondary-text'>ТЕКСТ <br />СООБЩЕНИЯ</h2>
            <div className="scroll-page__scrollable">
               <div className="scroll-page__text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit quia iste enim! Provident quia, omnis perspiciatis at earum perferendis minima repellat quidem soluta cumque voluptatibus possimus illum praesentium, minus porro molestias a sint sapiente aut doloribus accusamus placeat deserunt ex ducimus. Sint esse dicta repellat! Consequatur, ipsam consectetur. Molestias quas modi, adipisci a neque sapiente inventore incidunt beatae error voluptates dicta alias consectetur. Mollitia magni eligendi quas praesentium, vel perferendis eveniet illo, doloribus, magnam cupiditate possimus! Esse, praesentium? Molestias at esse laboriosam. Suscipit omnis dicta natus soluta nihil, eum quasi aliquam optio, harum delectus ipsa veritatis facere fuga libero odit perferendis deleniti, incidunt saepe magnam totam sapiente eius sit? Deserunt eius modi pariatur delectus reprehenderit optio vero sapiente omnis aliquam illum fuga temporibus dignissimos, qui cum ipsa incidunt, placeat dolorem totam molestiae, nesciunt error. Maiores consequatur numquam exercitationem nobis, recusandae reiciendis. Repudiandae, perspiciatis rem sequi nostrum tempora a laborum.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ScrollPage