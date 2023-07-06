import { useParams } from "react-router-dom";
import { TourismCards } from "./TourismCard";
import SecondCardData from "./FetchCardData";

export interface TourismSectionProps {
  cards: TourismCards[];
  currentTheme: any;
}

const TourismSection: React.FC<TourismSectionProps> = ({
  cards,
  currentTheme,
  
}) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = cards.find((card) => card.id.split("?")[0] === id);

  return (
    <div className={`Tourism-Section ${currentTheme}`}>
      <p>{renderItem?.title}</p>
      {/* <IslamicMonuments/> */}
      <SecondCardData/>
    </div>
  );
};

export default TourismSection;
