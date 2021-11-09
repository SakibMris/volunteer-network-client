import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user.displayName);
            })
    }
    return (
        <div>
            <button onClick={handleLogin}>Sign In</button>
        </div>
    );
};

export default Login;