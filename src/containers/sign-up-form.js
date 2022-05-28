import Form from "../components/form";

const SignUpForm = () => {

    const fields = [{fieldname:'email',type:'email'},{fieldname:'Tel',type:'Tel'},{fieldname:'password',type:'password'}];
         return ( <div className="signUpForm">
             <h1>Sign up</h1>
             <Form title={"signUpForm"} fields={fields} url={"/sign-up"} method={"post"} btnTitle={"sign up"} />
    </div>
    );
}
 
export default SignUpForm;