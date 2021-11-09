import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./Register.css"

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/admin", data)
            .then(res => {
                console.log(res)
            })
    };
    return (
        <div>
            <div className="text-primary text-center">
                <h1>Register Service</h1>
            </div>
            <div className="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("fullName", { required: true, maxLength: 40 })} placeholder="Full Name" />
                    <input {...register("email", { required: true, maxLength: 40 })} placeholder="User Name or Email" />
                    <input type="date" {...register("date")} />
                    <input {...register("description", { required: true, maxLength: 40 })} placeholder="Description" />
                    <input {...register("eventName", { required: true, maxLength: 40 })} placeholder="Event Name" />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;