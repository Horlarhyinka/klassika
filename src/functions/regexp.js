const EmailIsValid = new RegExp('^[a-zA-Z%?.-@]+@[a-zA-Z]{2,}.[a-zA-Z]{2,}$');
const ValidTel = new RegExp('^[0-9]{11}$');
const ValidPassword = new RegExp('^[a-zA-Z0-9?/.,@#$%&-]{6,}$');

const regex = {
    email: {
        expression:/^[a-zA-Z%?.-@]+@[a-zA-Z]{2,}.[a-zA-Z]{2,}$/,
        message:"invalid email address"},
    Tel:{
        expression:/^[0-9]{11}$/,
        message:"invalid telephone number"},
    password:{
        expression:/^[a-zA-Z0-9?/.,@#$%&-]{6,}$/,
        message:"password lenghth must be more than 6"}
}

export default regex;