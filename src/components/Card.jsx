import iconAvailable from "../assets/icon-available.svg"
import iconBusy from "../assets/icon-busy.svg"

export default function Card(props) {

    return (

        <div className="col">

            {/*Code below checks if a user is available/busy and displays the according icon*/}
            {props.available === true && <img className="card-icon" src={iconAvailable} alt="..." />}
            {props.available === false && <img className="card-icon" src={iconBusy} alt="..." />}

            <div className="card">
                <img src={props.image} className="card-img-top h-100 p-3" alt="No image" />

                <div className="card-body h-25">
                    <p className="card-text text-names">{props.firstName} {props.lastName}</p>
                    <p className="card-text text-location">{props.location} </p>

                    {/*Content that is hidden(shows on hover)*/}
                        <p className="card-text text-phone">{props.phone}</p>
                        <p className="card-text text-email">{props.email}</p>
                    
                </div>
            </div>
            
        </div>
        
    )
}      
