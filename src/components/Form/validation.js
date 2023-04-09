const validation = (userData) => {
    let errors = {};

    if(!userData.email){
        errors.email = "Por favor completa este campo"
    }    
    else if(
        !/\S+@\S+.\S+/.test(userData.email)
    ){
        errors.email = "Por favor colocar un E-mail valido"
    }
    else if(userData.email.length > 35){
        errors.email = "Tu E-mail no puede tener mas de 35 caracteres"
    }
    else{
        errors.email= "" 
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres" 
    }
    else if(!/\d/.test(userData.password)){
        errors.password = "La contraseña debe tener al menos un numero"
    }
    else{
        errors.password = ""
    }
    return errors
}

export default validation

//if(userData.password.length < 0)
//setErrors({ ...errors, password: "Por favor completa este campo" });