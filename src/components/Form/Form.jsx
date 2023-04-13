import "./Form.css"
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    }) 

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        //validation({ ...userData, [property]: value });
        setErrors(validation({...userData, [property]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className="todo2">
        <form onSubmit={handleSubmit} className="form">
            <img src="./images.jpeg" alt="" class="fondLog" />
            <div>
                <label htmlFor="email" className="mail">Email:</label>
                <input 
                    type="text"
                    placeholder="   ingrese su mail"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    class="bar1"
                />
                <p style={{color: 'rgb(203, 254, 222)'}}>{errors.email}</p>
                <span>{validation}</span>
            </div>
            <div>
                <label htmlFor="password" className="pass">Password:</label>
                <input 
                    type="text"
                    placeholder="   ingrese su password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    class="bar2"
                />
                <p style={{color: 'rgb(203, 254, 222)'}}>{errors.password}</p>
            </div>
            <button type='submit' className="clickLogin">Login</button>
            
        </form>
        </div>
    )
}

export default Form;