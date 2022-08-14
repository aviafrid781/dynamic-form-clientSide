import React from 'react';
import Bikeform from '../BikeForm/Bikeform';
import CarForm from '../CarForm/CarForm';
import FurnitureForm from '../FurnitureForm/FurnitureForm';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShowInsertData from '../ShowInsertData/ShowInsertData';
const home = () => {
    return (
        <div>
          
          

<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className=" d-flex justify-content-center mb-2 mt-5"
    >
      
      <Tab eventKey="profile" title="Show Data">
      <ShowInsertData></ShowInsertData>
      </Tab>
      <Tab eventKey="contact" title="FurnitureForm" >
       <FurnitureForm></FurnitureForm>
      </Tab>
      <Tab eventKey="contact1" title="Car Form" >
      <CarForm></CarForm>
      </Tab>
      <Tab eventKey="home" title="Bikeform">
       <Bikeform></Bikeform>
      </Tab>
    </Tabs>
    
    
        </div>
    );
};

export default home;