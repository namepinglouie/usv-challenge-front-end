import {Link} from "react-router-dom";

export default function Reservation({reservation}) {
    let {id, createdAt, firstName, lastName, phoneNumber, email, time, numGuests, restaurantId} = reservation;

    return (
        <div className="reservation-card-container">
            <div className="circle-guest">
                <p>{numGuests} <br /> guests</p>
            
            </div>
            <Link to = {`/reservations/${id}`}>
                <div className="reservation-card">
                    <div className="reservation-card-section">
                        <p className="reservation-type">restaurant id</p>
                        <p className="reservation-name-id">{restaurantId}</p>
                    </div>
                    <div className="reservation-card-section">
                        <p className="reservation-type">first name</p>
                        <p className="reservation-name">{firstName}</p>
                    </div>
                    <div className="reservation-card-section">
                        <p className="reservation-type">last name</p>
                        <p className="reservation-name">{lastName}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
};