import "./login.css";
import {LoginSubmit, React} from "./LoginImports"

const LoginForm = () => {
    return (
        <div>
            <div className="loginsubmission">
                <h1>Sign in</h1>
                <LoginSubmit/>
            </div>
        </div>
    );
}

export default LoginForm;