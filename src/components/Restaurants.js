import axios from "axios";
import {useState, useEffect} from "react";
import Restaurant from "./Restaurant.js";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    
    const [searchRestaurantName, setSearchRestaurantName] = useState("");
    const [searchRestaurantCuisine, setSearchRestaurantCuisine] = useState("");
    const [searchRestaurantLocation, setSearchRestaurantLocation] = useState("");
    const [searchRestaurantPrice, setSearchRestaurantPrice] = useState("");
    const [searchRestaurantDiningRestriction, setSearchRestaurantDiningRestriction] = useState("");

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants`)
             .then(res => setRestaurants(res.data.restaurants))
             .catch(error => console.log(error))
    });

    let handleSearchRestaurantName = (e) => setSearchRestaurantName(e.target.value);

    let handleSearchRestaurantCuisine = (e) => setSearchRestaurantCuisine(e.target.value);

    let handleSearchRestaurantLocation = (e) => setSearchRestaurantLocation(e.target.value);

    // let handleSearchRestaurantPrice = (e) => setSearchRestaurantPrice(e.target.value);

    // let handleSearchRestaurantDiningRestriction = (e) => setSearchRestaurantDiningRestriction(e.target.value);

    // const filterRestaurantPrice = restaurants.filter((restaurant) => restaurant.price.length === searchRestaurantPrice.length);

    // const filterRestaurantDiningRestriction = restaurants.filter((restaurant) => restaurant.diningRestriction.includes(searchRestaurantDiningRestriction));

    const arrOfFilters = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchRestaurantName.toLowerCase()))
                                    .filter((restaurant) => restaurant.cuisine.toLowerCase().includes(searchRestaurantCuisine.toLocaleLowerCase()))
                                    .filter((restaurant) => restaurant.location.toLowerCase().includes(searchRestaurantLocation.toLowerCase()))

    const mapFilterRestaurant = (filterRestaurant) => filterRestaurant.map((restaurant) => <Restaurant key = {restaurant.id} restaurant = {restaurant} />);


    return (
        <div>
           <input type = "text" value = {searchRestaurantName} onChange = {handleSearchRestaurantName} placeholder = "search name" />
           <input type = "text" value = {searchRestaurantCuisine} onChange = {handleSearchRestaurantCuisine} placeholder = "search cuisine" />
           <input type = "text" value = {searchRestaurantLocation} onChange = {handleSearchRestaurantLocation} placeholder = "search location" />
           {mapFilterRestaurant(arrOfFilters)}
        </div>
    );
};