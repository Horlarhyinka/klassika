import Form from "../components/form";

const SignInForm = () => {

    const fields = [{fieldname:"email",type:"email"},{fieldname: "password", type: "password"}]

    return (<div>

                <Form title={"sign-in"} fields={fields} btnTitle={"Login"}/>
                <p>login as an administrator </p>
            </div>);
}

export default SignInForm;
