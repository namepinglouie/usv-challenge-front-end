import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function ReservationDetails () {
    const [reservation, setReservation] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {createdAt, firstName, lastName, phoneNumber, time, numGuests, restaurantId} = reservation;

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/reservations/${id}`)
             .then(res => setReservation(res.data))
             .catch(error => console.log(error))
    });

    const handleDelete = () => {
        axios.delete(`${herokuAPI}/reservations/${id}`)
             .then(res => navigate("/reservations"))
             .catch(error => console.log(error))
    };

    return (
        <div>
            <div className="reservation-detail-container">
                <div className="reservation-detail">
                    <div className="reservation-detail-id">
                        <h3>&#123; {id} &#125;</h3>
                    </div>
                    <div className="reservation-detail-guest-number">
                        {numGuests} guests
                    </div>
                    <div>
                        <p className="tag-name">{time}</p>
                        <p className="tag-type">reservation date and time</p>
                    </div>
                    <div>
                        <p className="tag-name">{firstName}</p>
                        <p className="tag-type">first name</p>
                    </div>
                    <div>
                        <p className="tag-name">{lastName}</p>
                        <p className="tag-type">last name</p>
                    </div>
                    <div>
                        <p className="tag-name">{phoneNumber}</p>
                        <p className="tag-type">phone</p>
                    </div>
                    <div>
                        <p className="tag-name">{createdAt}</p>
                        <p className="tag-type">created date</p>
                    </div>
                    <div>
                        <p className="tag-name">{restaurantId}</p>
                        <p className="tag-type">restaurant id</p>
                    </div>
                </div>
                <div className="mini-nav">
                    <Link to = {"/reservations"}><button>BACK</button></Link>
                    <Link to = {`/reservations/${id}/edit`}><button>EDIT</button></Link>
                    <button onClick = {handleDelete}>DELETE</button>
                </div>
            </div>
        </div>
    );
};