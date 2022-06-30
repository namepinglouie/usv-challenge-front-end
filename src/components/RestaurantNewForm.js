import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function RestaurantNewForm() {
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    const [restaurant, setRestaurant] = useState({
        name: "",
        description: "",
        phoneNumber: "",
        openingTime: "",
        closingTime: "",
        price: "",
        cuisine: "",
        location: "",
        diningRestriction: ""
    });

    const navigate = useNavigate();
    
    const handleText = (e) => setRestaurant({...restaurant, [e.target.id]: e.target.value});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${herokuAPI}/restaurants`, restaurant)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error))
    };
    
    let {name, description, phoneNumber, openingTime, closingTime, price, cuisine, location, diningRestriction} = restaurant;
    
    return (
        <div className = "new-restaurant-container">
            <form onSubmit = {handleSubmit}>
                <div className="form-name">
                    <label htmlFor="name">RESTAURANT NAME</label>
                    <input className="new-form-input" id = "name" value = {name} type = "text" onChange = {handleText} />
                </div>
                <div className="form-phone">
                    <label htmlFor = "phoneNumber">PHONE NUMBER</label>
                    <input className="new-form-input"  id = "phoneNumber" value = {phoneNumber} type = "text" onChange={handleText} />
                </div>
                <div className="form-cuisine">
                    <label htmlFor="cuisine">CUISINE</label>
                    <input className="new-form-input"  id = "cuisine" value = {cuisine} type = "text" onChange = {handleText} />
                </div>
                <div className="form-location">
                    <label htmlFor="location">LOCATION</label>
                    <input className="new-form-input"  id = "location" value = {location} type = "text" onChange = {handleText} />
                </div>
                <div className="form-time">
                    <label htmlFor="openingTime">OPENING TIME</label>
                    <input className="new-form-input"  id = "openingTime" value = {openingTime} type = "text" onChange = {handleText} placeholder = "00:00:00" />
                </div>
                <div className="form-time">
                    <label htmlFor="closingTime">CLOSING TIME</label>
                    <input className="new-form-input"  id = "closingTime" value = {closingTime} type = "text" onChange = {handleText} placeholder = "00:00:00"/>
                </div>
                <div className="form-price">
                    <label htmlFor="price">PRICE</label>
                    <input id = "price" type = "radio" value = "$" name = "price" onChange={handleText} /> $
                    <input id = "price" type = "radio" value = "$$" name = "price" onChange={handleText} /> $$
                    <input id = "price" type = "radio" value = "$$$" name = "price" onChange={handleText} /> $$$
                    <input id = "price" type = "radio" value = "$$$$" name = "price" onChange={handleText} /> $$$$
                </div>
                <div className="form-dining-restriction">
                    <label htmlFor="diningRestriction">DINING RESTRICTION</label>
                    <input id = "diningRestriction" type = "radio" value = "Takeout Only" name = "diningRestriction" onChange={handleText} /> Takeout Only
                    <input id = "diningRestriction" type = "radio" value = "Delivery Only" name = "diningRestriction" onChange={handleText} /> Delivery Only
                </div>
                <div className="form-description">
                    <label htmlFor="description">DESCRIPTION</label>
                    <textarea id = "description" value = {description} onChange = {handleText}></textarea>
                </div>
                <div className="mini-nav-reverse"><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    )

};