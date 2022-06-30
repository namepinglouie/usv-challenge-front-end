import axios from "axios";
import {useState, useEffect} from "react";
import Reservation from "./Reservation.js";

export default function Reservations() {
    const [reservations, setReservations] = useState([]);
    const [searchReservation, setSearchReservation] = useState("");

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/reservations`)
             .then(res => setReservations(res.data.reservations))
             .catch(error => console.log(error))
    });

    //let handleSearch = (e) => setSearchReservation(e.target.value);
    let handleSearch = (e) =>{
        console.log(e.target.value);
        setSearchReservation(e.target.value)
    }

    const filterReservations = !searchReservation ? reservations
                                                  : reservations.filter((reservation) => reservation.restaurantId.includes(searchReservation));

    const mapFilterReservations = filterReservations.map((reservation) => <Reservation key = {reservation.id} reservation = {reservation} />);

    return (
        <div>
            <div className="searchbar-container">
                <h3>SEARCH RESERVATION</h3>
                <div className="center-search-bars">
                    <input className="search-bar" type = "text" value = {searchReservation} onChange = {handleSearch} placeholder = "restaurant id" />
                </div>
            </div>
            <div className="center-reservation-card">
                {mapFilterReservations}
            </div>
        </div>
    )
};