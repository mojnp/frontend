import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export interface Data {
  id?: number;
  title: string;
  description: string;
  location: string;
  category: string;
  images: string;
  reviews: [];
}

export const baseURL = "https://api.mojnovipazar.info/tourism/";
const SecondCardData: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="card-list">
      {data.map((cardData) => (
        <Card
        key={cardData.id}
        title={cardData.title}
        description={cardData.description}
        location={cardData.location}
        category={cardData.category}
        images={cardData.images}
        reviews={cardData.reviews}
        />
      ))}
    </div>
  );
};
export default SecondCardData;
