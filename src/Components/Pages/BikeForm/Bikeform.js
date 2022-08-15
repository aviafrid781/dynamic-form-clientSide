import React from 'react';
import { useForm } from "react-hook-form";
import { findAllInRenderedTree } from 'react-dom/test-utils';
import axios from 'axios';
import './BikeForm.css';
const Bikeform = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);


    // const onSubmit = data => {

    //     console.log(data);
    //     //use axios for post API

    //     axios.post('http://localhost:5000/bikes', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('added Successfully');
    //                 reset();
    //             }
    //         })
    // }

    const onSubmit = data => {

        fetch("https://sleepy-scrubland-41147.herokuapp.com/bikes", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(data);
                if (result.insertedId) {
                    alert(' new service added successfully')
                    reset()
                }
            })
    }


    // console.log(watch("example"));
    return (
        <div className="add-service">
            <h1>Insert New bike Product </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("category", { required: true, maxLength: 100 })} placeholder="Category" />
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Bike Name" />
                <input {...register("model", { required: true, maxLength: 100 })} placeholder="Model Name" />
                <input {...register("brand", { required: true, maxLength: 100 })} placeholder="Brand Name" />
                <input {...register("condition", { required: true, maxLength: 100 })} placeholder="Condition" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("capacity", { required: true, maxLength: 100 })} placeholder="Engine capacity" />
                <input {...register("location", { required: true, maxLength: 100 })} placeholder="Location" />
                <input {...register("img")} placeholder="img url" />
                <textarea  {...register("discription")} placeholder="Discription" />
                <input className="btn  button " type="submit" />
            </form>
        </div>
    );
};

export default Bikeform;