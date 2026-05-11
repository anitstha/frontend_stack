import React, { useState } from 'react'
import Button from '../components/common/Button'
import InputField from '../components/common/InputField'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/auth'

const LoginTest = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate();

    //handleChange function
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    //handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(credentials.username, credentials.password);

            // stores jwt token localstorage
            localStorage.setItem("token", data.accessToken);
            alert("Login Successful..");

            //redirects to dashboard
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
            alert("Invalid Credentials");
        }

        //clear fields
        setCredentials({
            username: "",
            password: "",
        })
    }

    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white/10 p-8 rounded-3xl backdrop-blur3xl border border-gray-100'>
                <h1 className='text-xl font-semibold text-gray-100'>Login to continue..</h1>
                <InputField
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <Button
                    value="Login"
                />
            </form>
        </div>
    )
}

export default LoginTest;