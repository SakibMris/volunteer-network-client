import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./Event.css"
const Events = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
            })
    };
    return (
        <div>
            <h1 className="text-center">Events Listed Here</h1>
            <div className="event">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("eventName")} placeholder="Event Title" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input {...register("imageURL")} placeholder="Image URL" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Events;