import React, {useState} from "react";

const LightComponent = () =>{

    const [isLightOn, setIsLightOn] = useState(false);

    
    // const toggleLight = () => {
    //   var image = document.getElementById('myImage');
    //   if (image.src.match("bulbon")) {
    //     image.src = {.../images/lighton.jpg};
    //   } else {
    //     image.src = {.../images/bulb-off.png};
    //   }
    // };
  
    // <img src={require("../images/not-found.jpg")} alt="not-found"/> 

    return (
      <div>
        <h1>Lights Control</h1>
        {/* <img className="" onclick={()=>toggleLight()} alt="not-found" /> */}
        
        {/* <button onClick={toggleLight}>
          {isLightOn ? 'Turn Off' : 'Turn On'}
        </button> */}
      </div>
    );
  };
  
 


export default LightComponent;