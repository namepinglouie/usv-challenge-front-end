import {useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

export default function ReserveARestaurant() {
    let {id} = useParams();
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const [reserveRestaurant, setReserveRestaurant] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        time: "",
        numGuests: "",
        restaurantId: id,
    });

    let {firstName, lastName, phoneNumber, email, time, numGuests, restaurantId} = reserveRestaurant;
    let {name} = restaurantInfo;

    const navigate = useNavigate();

    const handleText = (e) => setReserveRestaurant({...reserveRestaurant, [e.target.id]: e.target.value});

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants/${id}`)
             .then(res => setRestaurantInfo(res.data))
             .catch(error => console.log(error))
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${herokuAPI}/reservations`, reserveRestaurant)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error))
    };

    return (
        <div className="reservation-container">
            <div>
                <h3>RESERVING AT</h3>
                <h1>{name}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="reservation-section">
                    <label htmlFor="firstName">FIRST NAME</label>
                    <input className="reservation-input" id = "firstName" value = {firstName} type = "text" onChange = {handleText} />
                </div>
                <div className="reservation-section">
                    <label htmlFor="lastName">LAST NAME</label>
                    <input className="reservation-input"  id = "lastName" value = {lastName} type = "text" onChange = {handleText} />
                </div>
                <div className="reservation-section">
                    <label htmlFor="phoneNumber">PHONE NUMBER</label>
                    <input className="reservation-input"  id = "phoneNumber" value = {phoneNumber} type = "text" onChange = {handleText} />
                </div>
                <div className="reservation-section">
                    <label htmlFor="email">EMAIL</label>
                    <input className="reservation-input"  id = "email" value = {email} type = "email" onChange = {handleText} />
                </div>
                <div className="reservation-section">
                    <label htmlFor="time">TIME</label>
                    <input className="reservation-input"  id = "time" value = {time} type = "text" onChange = {handleText} />
                </div>
                <div className="reservation-section">
                    <label htmlFor="numGuests">Number Of Guests</label>
                    <input className="reservation-input"  id = "numGuests" value = {numGuests} type = "number" onChange = {handleText} min = "1" />
                </div>
                <div className="mini-nav-reverse"><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    )

};