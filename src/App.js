import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './view/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "d4c0456be5a3.a96a007548bd179de603"

function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const email = "valen1234@gmail.com";
   const password = "123asd";

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element = {<Form login={login}/>} />
            <Route path='/home' element = { <Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/detail/:id' element = {<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
