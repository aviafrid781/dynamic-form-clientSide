import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
const FurnitureForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);

    // console.log(watch("example"));

    const onSubmit = data => {

        console.log(data);
        //use axios for post API

        axios.post('https://sleepy-scrubland-41147.herokuapp.com/furnitures', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h1>Insert New Furniture Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("category", { required: true, maxLength: 100 })} placeholder="Category" />
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Product Name" />
                <input {...register("typename", { required: true, maxLength: 100 })} placeholder="Furniture type" />
                <input {...register("condition", { required: true, maxLength: 100 })} placeholder="Condition" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("location", { required: true, maxLength: 100 })} placeholder="Location" />
                <input {...register("img")} placeholder="img url" />
                <textarea  {...register("discription")} placeholder="Discription" />
                <input className="btn  button " type="submit" />
            </form>
        </div>
    );
};

export default FurnitureForm;