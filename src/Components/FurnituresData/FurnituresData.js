import React, { useEffect, useState } from 'react';

const FurnituresData = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        fetch("https://sleepy-scrubland-41147.herokuapp.com/furnitures")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

 console.log(data);
    return (
        <div>
            <h1>  Furnitures Data</h1>

         {
            data.map(dt=> <div class="card mb-3 col-md-4 container" style={{width:'50%'}}  >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={dt.img} class="img-fluid rounded-start w-100" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{dt.category}</h5>
                        <p class="card-text"> Price: ${dt.price}</p>
                        <p class="card-text"><small class="text-muted">{dt.name}</small></p>
                        <p class="card-text"><small class="text-muted">{dt.discription}</small></p>
                    </div>
                </div>
            </div>
        </div>)
         }
    
            
        </div>
    );
};

export default FurnituresData;