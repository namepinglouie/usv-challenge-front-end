import {useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

export default function RestaurantEditForm() {
    let {id} = useParams();
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";
    const [updatedRestaurant, setUpdatedRestaurant] = useState({
        description: "",
        phoneNumber: "",
    });

    let {description, phoneNumber} = updatedRestaurant;
    
    const navigate = useNavigate();

    const handleText = (e) => setUpdatedRestaurant({...updatedRestaurant, [e.target.id]: e.target.value});

    const handleEdit = (e) => {
        e.preventDefault();
        axios.patch(`${herokuAPI}/restaurants/${id}`, updatedRestaurant)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error.response.request._response))
    };

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea id = "description" value = {description} onChange = {handleText}></textarea>
                <br />
                <label htmlFor = "phoneNumber">PHONE NUMBER</label>
                <input id = "phoneNumber" value = {phoneNumber} type = "text" onChange={handleText} />
                
                <div>
                    <Link to = {`/restaurants/${id}`}><button>BACK</button></Link>
                    <button type = "submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
};