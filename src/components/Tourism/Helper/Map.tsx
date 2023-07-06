import "../index.scss";


const CityMap: React.FC = () => {
  return (
    <div className="ContainerMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23289.625375960393!2d20.494823251129965!3d43.14226271622716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4756283de66eab45%3A0x2ea7623f36196cd8!2z0J3QvtCy0Lgg0J_QsNC30LDRgA!5e0!3m2!1ssr!2srs!4v1688226069217!5m2!1ssr!2srs"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        className="mapForNP"
      ></iframe>
    </div>
  );
};

export default CityMap;
