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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    placeholder="ingrese su mail"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.email}</p>
                <span>{validation}</span>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="text"
                    placeholder="ingrese su password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.password}</p>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Form;