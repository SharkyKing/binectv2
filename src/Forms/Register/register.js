import "./register.css";
import {RegisterSubmit, React} from "./RegisterImports.js";

const RegisterForm = () => {
    return (
        <div className='registersubmission'>
            <h1>Create new account!</h1>
            <RegisterSubmit/>
        </div>
    );
}

export default RegisterForm;
