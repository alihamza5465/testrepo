import React from "react";
import "./Resturent.css";

const Resturent = ({ userdata }) => {
  console.log(userdata);
  return (
    <>
      <div className="body-section">
        {userdata.map((curElm, index) => {
          return (
            <>
              <div className="card-section">
                <div className="card-body">
                  <span>{curElm.id}</span>
                  <span>{curElm.category}</span>
                  <h1>{curElm.name}</h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quam adipisci asperiores laborum rerum quas mollitia
                    inventore recusandae ipsum blanditiis.
                  </span>
                  <div className="card-img">
                    <img src={curElm.image} alt="random" />
                  </div>
                  <button className="order-button">ORDER NOW</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Resturent;
