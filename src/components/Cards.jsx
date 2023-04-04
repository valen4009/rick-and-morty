import Card from './Card';

export default function Cards(props) {
   const {characters} = props
   return (<>
      {
         characters.map(({name, status, species, gender, origin, image, id}) => {
            return( <Card
               key = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin}
               image = {image}
               onClose = {() => window.alert('Emulamos que se cierra la card')}
               />
            )
         })
      }
   </>)
}
