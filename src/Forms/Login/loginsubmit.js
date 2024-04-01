import {FaUser, FaLock, useState, React} from "./LoginImports"

const LoginSubmit = ({ onSubmit }) => {
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDomain = window.location.hostname;
            const url = `http://${currentDomain}:${process.env.PORT || 8081}/login`;
            const response = await fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: Email, password: Pass }), 
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                document.cookie = `token=${data.token}; expires=${new Date(data.expires)}`;
                window.location.href = '/Forms/Home';
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div className="loginsubmitcontrols"> 
                <div className="loginsubmitcontrols-inner">
                    <div>
                        <FaUser className="icon" />
                        <input className="loginsubmitinput" type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <FaLock className="icon" />
                        <input className="loginsubmitinput" type="password" placeholder="Password" value={Pass} onChange={(e) => setPass(e.target.value)} required/>
                    </div>
                        <div className="loginsubmitpart">
                            <label><input type="checkbox" />Remember me</label>
                        </div>

                        <div>
                            <button className="submitBtn" type="submit">Login</button>
                        </div>
                        
                        <div>
                            <button className="forgotBtn">Forgot Password</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginSubmit;
