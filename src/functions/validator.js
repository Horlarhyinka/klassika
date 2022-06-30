import regex from "./regexp";

const validate = (field,e) =>{
    console.log(regex[field].expression);
    console.log(e.target.attributes)
    if(regex[field].expression.test(e.target.value) !== true){
        e.target.className = "invalid";
        e.target.attributes.status.value = "invalid";
        
    };
    if(regex[field].expression.test(e.target.value) === true){
        e.target.className = "valid";
    };
 
}

export {validate};