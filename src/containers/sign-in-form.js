import Form from "../components/form";

const SignInForm = () => {

    const fields = [{fieldname:"email",type:"email"},{fieldname: "password", type: "password"}]

    return ( <Form title={"sign-in"} fields={fields} />);
}
 
export default SignInForm;