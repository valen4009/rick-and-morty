import Card from "../Card/Card"
import "./Cards.css"

function Cards({ characters, onClose }) {
   return (
      <div class="head">
         {
            characters.map(({ id, name, status, species, gender, origin, image}) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
         <video muted autoPlay loop preload>
            <source src="../../../public/nebulosa-25047.mp4" type="video/mp4" />
         </video>
      </div>
   )
}


export default Cards