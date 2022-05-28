const EmailIsValid = new RegExp('^[a-zA-Z%?.-@]+@[a-zA-Z]{2,}.[a-zA-Z]{2,}$');
const ValidTel = new RegExp('^[0-9]{11}$');
const ValidPassword = new RegExp('^[a-zA-Z0-9?/.,@#$%&-]{6,}$');


const ValidateEmail = (e) =>{

if( EmailIsValid.test(e.target.value)){
    e.target.className = "valid";  
}else if( !EmailIsValid.test(e.target.value)){
    e.target.className = "invalid";
    e.target.attributes.invalidInput.value = "true";
}

};
const ValidateTel = (e) =>{
    if( ValidTel.test(e.target.value)){
        e.target.className = "valid";
    }else if( !ValidTel.test(e.target.value)){
        e.target.className = "invalid";
    }

};


const ValidatePassword = (e) =>{
    if( ValidPassword.test(e.target.value)){
        e.target.className = "valid";
   
    }else if( !ValidPassword.test(e.target.value)){
        e.target.className = "invalid";
    };
};

const getNewPage = (url) =>{
    fetch(url,{
    method: "GET"
    })
}

const handleValidation = () =>{

}

export  const Validators = {
    email: ValidateEmail,
    password: ValidatePassword,
    Tel: ValidateTel
};