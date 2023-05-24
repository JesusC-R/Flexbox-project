import React from "react";

// Icons
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaPlaneDeparture as PlaneIcon } from "react-icons/fa";
import { AiTwotoneCar as CarIcon } from "react-icons/ai";
import { FiMap as MapIcon } from "react-icons/fi";
import { AiFillStar as StarIcon } from "react-icons/ai";
import { MdLocationOn as LocationIcon} from "react-icons/md";

// Images 
import Img1 from "../../assets/img/hotel-1.jpg";
import Img2 from "../../assets/img/hotel-2.jpg";
import Img3 from "../../assets/img/hotel-3.jpg";

const Navigation = () => {
  return (
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <a href="https://" className="side-nav__link">
              <HomeIcon className="side-nav__icon" />
              <span>Hotel</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="https://" className="side-nav__link">
              <PlaneIcon className="side-nav__icon" />
              <span>Fight</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="https://" className="side-nav__link">
              <CarIcon className="side-nav__icon" />
              <span>Car Rental</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="https://" className="side-nav__link">
              <MapIcon className="side-nav__icon" />
              <span>Hotel</span>
            </a>
          </li>
        </ul>

        <div className="legal">&copy; 2023 Trillo. All rights reserved</div>
      </nav>
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img src={Img1} alt="Hotel 1" className="gallery__photo" />
          </figure>
          <figure className="gallery__item">
            <img src={Img2} alt="Hotel 2" className="gallery__photo" />
          </figure>
          <figure className="gallery__item">
            <img src={Img3} alt="Hotel 3" className="gallery__photo" />
          </figure>
        </div>

        <div className="overview">
          <h1 className="overview__heading">Hotel Las Palmas</h1>
          <div className="overview__stars">
            <StarIcon className="overview__icon-star"/>
            <StarIcon className="overview__icon-star"/>
            <StarIcon className="overview__icon-star"/>
            <StarIcon className="overview__icon-star"/>
            <StarIcon className="overview__icon-star"/>
          </div>

          <div className="overview__location">
            <LocationIcon className="overview__icon-location"/>
            <button className="btn-inline">Albufeira, Portugal</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navigation;
