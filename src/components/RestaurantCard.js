import { LOGO_LINK } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
      name,
      cuisines,
      avgRating,
      locality,
      cloudinaryImageId
    } = resData?.info;
    return (
      <div className="res-card">
        <img alt="res-logo" className="res-logo" src={LOGO_LINK + cloudinaryImageId}/>
        <div className="res-details">
          <h5 className="res-name">{name}</h5>
          <h6 className="res-cusine">{cuisines}</h6>
          <h6 className="res-ratings">{avgRating}</h6>
          <h6 className="res-address">{locality}</h6>
        </div>
        </div>
    );
  };

  export default RestaurantCard;