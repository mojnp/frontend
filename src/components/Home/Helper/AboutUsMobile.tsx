import { TbTargetArrow } from "react-icons/tb";
import { GiEyeTarget} from "react-icons/gi";

const AboutMobile = () => {
    return (
      <div className="main-div-mobile">
        <div className="top-title">Ostanite u toku kroz nasu aplikaciju</div>
        <div className="titles-in-row-mobile">
          <div className="right-title">
            Posetili ste nas grad? Ne znate sta da obidjete, gde se ta mesta
            nalaze? Imamo resenje!
          </div>
          <div className="middle-title">
            Naisli ste na problem? Bilo je dosta tehnickih problema? Mi vam nudimo
            resenje.
          </div>
          <div className="left-title">
            Trazite stan i zelite da provedete sto manje vremena?
          </div>
        </div>
        <div className="main-title-in-the-middle">
          Skrolom kroz nasu aplikaciju mozete imati Novi Pazar na dlanu
        </div>
        <div className="info-sections-mobile">
          <div className="left-info-section">Dnevne vesti</div>
          <div className="middle-info-section">Poseti Novi Pazar</div>
          <div className="right-info-section">Prijavi problem</div>
        </div>
        <div className="line-btwn-section">
          <div className="line-in-btwn"></div>
        </div>
        <div className="our-mission-section-mobile">
          <div className="two-cards-in-row">
            <div className="mission-content">
                <div className="mission-icon">
                  <TbTargetArrow/>
                </div>
                <div className="mission-text">
                Naša misija je da omogućimo jednostavan pristup informacijama o turizmu,
                 vestima i da ohrabrimo aktivno učešće korisnika u rešavanju problema u njihovoj zajednici.
                  Verujemo da će naša aplikacija poboljšati iskustvo korisnika i unaprediti naše živote na više nivoa.
                </div>
  
            </div>
            <div className="vision-content">
              <div className="vision-icon">
                <GiEyeTarget/>
              </div>
              <div className="vision-text">
              Naša vizija je da stvorimo jedinstvenu aplikaciju
               koja će postati vaš nezamenljiv pratilac u svetu turizma,
                dnevnih vesti i rešavanju problema u vašem okruženju. Sa željom da unapredimo vaše iskustvo putovanja, informisanja i angažmana u zajednici, naša aplikacija kombinuje ove tri ključne funkcionalnosti na inovativan način.
              </div>
  
            </div>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default AboutMobile;
  