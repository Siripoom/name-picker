import React, { useRef, useState } from 'react';
import { SpinWheel } from "react-spin-wheel"
import "react-spin-wheel/dist/index.css"

const Random = () => {
  
    return (
        <>
          <SpinWheel 
            items={
              ["United States", "Brazil", "India", "China", "Russia", "Australia", "Japan", "Canada", "France", "Germany"]
            }
            onFinishSpin={(item) => {
              alert(item);
            }}
            onReset = {() => {
                
            }}
          />
        </>
      )
};

export default Random;
