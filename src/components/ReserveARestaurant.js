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
        <div>
            <h1>RESERVE AT: {name}</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">FIRST NAME</label>
                <input id = "firstName" value = {firstName} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="lastName">LAST NAME</label>
                <input id = "lastName" value = {lastName} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="phoneNumber">PHONE NUMBER</label>
                <input id = "phoneNumber" value = {phoneNumber} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="email">EMAIL</label>
                <input id = "email" value = {email} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="time">TIME</label>
                <input id = "time" value = {time} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="numGuests">Number Of Guests</label>
                <input id = "numGuests" value = {numGuests} type = "text" onChange = {handleText} />

                <div><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    )

};