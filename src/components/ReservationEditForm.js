import {useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

export default function ReservationEditForm() {
    let {id} = useParams();
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";
    const [updatedReservation, setUpdatedReservation] = useState({
        time: "",
        numGuests: ""
    });

    let {time, numGuests} = updatedReservation;

    const navigate = useNavigate();

    const handleText = (e) => setUpdatedReservation({...updatedReservation, [e.target.id]: e.target.value});

    const handleEdit = (e) => {
        e.preventDefault();
        axios.patch(`${herokuAPI}/reservations/${id}`, updatedReservation)
             .then(res => navigate("/reservations"))
             .catch(error => console.log(error))
    };

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label htmlFor="time">TIME</label>
                <input id = "time" value = {time} type = "text" onChange={handleText} />
                <br />
                <label htmlFor="numGuests">NUMBER OF GUESTS</label>
                <input id = "numGuests" value = {numGuests} type = "text" onChange={handleText} />
                
                <div>
                    <Link to = {`/reservations/${id}`}><button>BACK</button></Link>
                    <button type = "submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
};