import '../index.scss';

const HomeHeroMobile = () => {
  return (
    <div className="Home-Main-Mobile">
      <div className="text-side">
        <div className="title">Dobrodosli u</div>
        <div className="sub-title">Novi Pazar</div>
        <div className="description">
          Lako nadjite mesto za <span>Hranu, Kupovinu, Spavanje</span> ili
          posetite nasu <span>partneri</span> i 
          <span> lokalni biznisi stranicu</span>
        </div>
        <div className="mini-description">
          <span>Popularne pretrage</span>: Planinarenje, Hoteli, Dzamije
        </div>
        <button className="discover-btn">Discover</button>
      </div>
      <div className="images-side">
        <div className="top-left-image-card">
          <img className="large-image" src="" alt="img" />
        </div>
        <div className="top-right-image-card">
          <img className="small-image" src="" alt="img" />
        </div>
        <div className="bottom-left-image-card">
          <img className="small-image" src="" alt="img" />
        </div>
        <div className="bottom-right-image-card">
          <img className="large-image" src="" alt="img" />
        </div>
      </div>
    </div>
  );
};
export default HomeHeroMobile;
