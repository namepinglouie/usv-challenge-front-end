import {Link} from "react-router-dom";

export default function Restaurant({restaurant}) {
    let {id, name, phoneNumber, openingTime, closingTime, location, cuisine, price, reservations} = restaurant;

    const formatPhoneNumber = (phone) => {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
    };

    return (
        <div className="restaurant-card-container">
            <Link to = {`/restaurants/${id}`}>
                <div className="restaurant-card">
                    <div className="restaurant-name">{name}</div>
                    <div><img src="https://dummyimage.com/425x150/FFFFFF.png" alt = "dummy img" /></div>
                    <div className="restaurant-info">
                        <div className="text-category-container">
                            <p className="tag-name">{cuisine}</p>
                            <p className="tag-type">cuisine</p> 
                        </div>
                        <div className="text-category-container">
                            <p className="tag-name">{price}</p>
                            <p className="tag-type">price</p> 
                        </div>
                        <div className="text-category-container">
                            <p className="tag-name">{formatPhoneNumber(phoneNumber)}</p>
                            <p className="tag-type">phone</p> 
                        </div>
                        <div className="text-category-container">
                            <p className="tag-name">{location}</p>
                            <p className="tag-type">location</p> 
                        </div>

                        <div className="text-category-container">
                            <p className="tag-name">{reservations.length}</p>
                            <p className="tag-type">reservations</p> 
                        </div>

                        <div className="bottom-container">
                            <div className="bottom-category-container">
                                <p className="tag-name">{openingTime}</p>
                                <p className="tag-type bottom-tag">opening hour</p>
                            </div>
                            <div className="bottom-category-container">
                                <p className="tag-name">{closingTime}</p>
                                <p className="tag-type bottom-tag">closing hour</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};