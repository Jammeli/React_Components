import React from "react";
function FullName (){
    const Person = {
            firstname:"Marwen",
            lastname:"Jammeli"
    }
    
    return (
    <div> 
        <h5 className="card-title">{Person.firstname} {Person.lastname} </h5>
    </div>
    );

}
export default FullName;