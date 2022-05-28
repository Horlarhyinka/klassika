import Form from "../components/form";
import './styles/signupform.css';

const SignUpForm = () => {

    const fields = [{fieldname:'email',type:'email'},{fieldname:'Tel',type:'Tel'},{fieldname:'password',type:'password'}];
         return ( <div className="signUpForm">
             <Form title={"signUpForm"} fields={fields} url={"/sign-up"} method={"post"} btnTitle={"sign up"} />
    </div>
    );
}
 
export default SignUpForm;