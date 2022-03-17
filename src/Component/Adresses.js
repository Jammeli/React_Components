import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function Adresses (){
    const Adress = {
        Street : "Avenue Ali Bourguiba",
        Building : "Immeuble Teka",
        Apprt : 2
    }
    return (
    <div> 
        <p className="card-text"><FontAwesomeIcon icon={faHome} /> {Adress.Street} {Adress.Building} Appt N° {Adress.Apprt}</p>
    </div>
    );

}
export default Adresses;