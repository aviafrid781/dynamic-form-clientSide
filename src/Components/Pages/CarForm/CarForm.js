import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { findAllInRenderedTree } from 'react-dom/test-utils';

const CarForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    // console.log(watch("example"));

    const onSubmit = data => {

        console.log(data);
        //use axios for post API

        axios.post('https://sleepy-scrubland-41147.herokuapp.com/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h1>Insert New Car Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("category", { required: true, maxLength: 100 })} placeholder="Category" />
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Car Name" />
                <input {...register("model", { required: true, maxLength: 100 })} placeholder="Car Model Name" />
                <input {...register("brand", { required: true, maxLength: 100 })} placeholder="Car Brand Name" />
                <input {...register("condition", { required: true, maxLength: 100 })} placeholder="Condition" />
                <input {...register("bodytype", { required: true, maxLength: 100 })} placeholder="Body type" />
                <input {...register("fueltype", { required: true, maxLength: 100 })} placeholder="Fuel type" />
                <input {...register("run", { required: true, maxLength: 100 })} placeholder="Kilometers run" />
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

export default CarForm;