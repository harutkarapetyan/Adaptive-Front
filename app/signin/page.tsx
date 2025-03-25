'use client'
import React, {useEffect, useState} from "react";
import './style.scss'
import { login } from "./login";
const SignIn:React.FC = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      try {
        const response = await login(email, password);
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.user_id);
        window.location.href = "/dashboard";
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
        return (
            <div className='login_page'>
                <form onSubmit={handleLogin} >
                  <div className="wrapper">
                    <h2>Sign In</h2>
                    <div className="input-field">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required/>
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input
                           type="password"
                           value={password}
                           onChange={(e) =>setPassword(e.target.value)}
                           required/>
                        <label>Enter your password</label>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="forget">
                        <label >
                            <input type="checkbox" id="remember"/>
                            <p>Remember me</p>
                        </label>
                        <a href="/forgotpass">Forgot password?</a>
                    </div>
                    <button type="submit">Log In</button>
                </div>
                 </form>
            </div>
        )
    }
export default SignIn