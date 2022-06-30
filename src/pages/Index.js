import Restaurants from "../components/Restaurants";

export default function Index() {
    return (
        <div>
            <div className="title-tab">
                <p>restaurants</p>
            </div>
            <div>
                <Restaurants />
            </div>
        </div>
    )
};