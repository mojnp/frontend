import React from "react";
import "../index.scss";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
// import SecondPage from "./SecondPage";

export interface CardProps {
  id?: any;
  title?: string;
  description?: string;
  location?: any;
  category?: string;
  images?: any;
  reviews?: [];
}
const Card: React.FC<CardProps> = ({ title, location }) => {
  return (
    <div className="Card_Container">
      <div className="mainCardWrapper">
        <div className="card_title">{title}</div>
        <div className="mapCity">
          <iframe src={location} className="map"></iframe>
        </div>
        <div className="SearchForIt">
          <Link to={`/second-page`}>
            <Button color="green" radius="lg">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
