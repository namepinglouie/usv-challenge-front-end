import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {name, description, phoneNumber, openingTime, closingTime, location, cuisine, price} = restaurant;

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants/${id}`)
             .then(res => setRestaurant(res.data))
             .catch(error => console.log(error))
    });

    const handleDelete = () => {
        axios.delete(`${herokuAPI}/restaurants/${id}`)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error))
    };

    // const formatPhoneNumber = (phone) => {
    //     return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
    // };

    return (
        <div>
            <div className="detail-card-container">
                <div className="detail-restaurant-title">{name}</div>
                <div className="detail-restaurant-time">
                    <div className="bottom-category-container">
                        <p className="tag-name">{openingTime}</p>
                        <p className="tag-type">opening hour</p>
                    </div>
                    <div className="bottom-category-container">
                        <p className="tag-name">{closingTime}</p>
                        <p className="tag-type">closing hour</p>
                    </div>
                </div>
                <div className="detail-restaurant-info">
                    <div className="text-category-container">
                        <p className="tag-name">{cuisine}</p>
                        <p className="tag-type">cuisine</p> 
                    </div>
                    <div className="text-category-container">
                        <p className="tag-name">{price}</p>
                        <p className="tag-type">price</p> 
                    </div>
                    <div className="text-category-container">
                        {/* <p className="tag-name">{formatPhoneNumber(phoneNumber)}</p> */}
                        <p className="tag-name">{phoneNumber}</p>
                        <p className="tag-type">phone</p> 
                    </div>
                    <div className="text-category-container">
                        <p className="tag-name">{location}</p>
                        <p className="tag-type">location</p> 
                    </div>
                    <div className="text-category-container description-padding">
                        {description}
                    </div>
                </div>
                <div className="mini-nav">
                    <Link to = {"/restaurants"}><button>BACK</button></Link>
                    <Link to = {`/restaurants/${id}/edit`}><button>EDIT</button></Link>
                    <Link to = {`/reservations/${id}/new`}><button>MAKE RESERVATION</button></Link>
                    <button onClick = {handleDelete}>DELETE</button>
                </div>
            </div>
        </div>
    )
};