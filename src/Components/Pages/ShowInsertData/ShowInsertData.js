import React from 'react';
import { NavLink } from 'react-router-dom';
import phone from '../../../images/smartphone.png'
import bike from '../../../images/motorbike.png'
import taxi from '../../../images/taxi.png'

const ShowInsertData = () => {
    return (
        <div className='mb-5 mt-5 row w-50 mx-auto'>

            <NavLink to='furnituresData'  className='d-flex justify-content-center col-md-4 text-decoration-none align-items-center'>
                
                    <img src={phone} alt="" srcset="" style={{ width: '25%' }} />
                    <div style={{lineHeight:'8px'}}>
                    <p className='text-dark '>Phone</p>
                    <span style={{fontSize:'12px',color:'gray'}}>85,960 ads</span>
                    </div>
                
            </NavLink>
            <NavLink to='bikesData'className='d-flex justify-content-center col-md-4  text-decoration-none align-items-center'>

                    <img src={bike} alt="" srcset="" style={{ width: '25%' }} />
                    <div className='ms-2' style={{lineHeight:'8px'}}>
                    <p className='text-dark '>Bike</p>
                    <span style={{fontSize:'12px',color:'gray'}}>85,960 ads</span>
                    </div>
               
            </NavLink>

         <NavLink to='carData' className='d-flex justify-content-center col-md-4  text-decoration-none align-items-center'>
         
                <img src={taxi} alt="" srcset="" style={{ width: '25%' }} />
                <div className='ms-2' style={{lineHeight:'8px'}}>
                    <p className='text-dark'>Car</p>
                    <span style={{fontSize:'12px',color:'gray'}}>85,960 ads</span>
                    </div>
           
         </NavLink>


        </div>
    );
};

export default ShowInsertData;