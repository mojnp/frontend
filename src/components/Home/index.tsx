import About from "./Helper/AboutUs";
import AboutMobile from "./Helper/AboutUsMobile";
import HomeHero from "./Helper/HomeHero";
import HomeHeroMobile from "./Helper/HomeHeroMobile";
import HomePartnerDesktop from "./Helper/HomePartner/HomePartnerDesktop";
import HomePartnerMobile from "./Helper/HomePartner/HomePartnerMobile";
import "./index.scss";
import { useViewportSize } from "@mantine/hooks";

const HomeDesktop = ({ currentTheme }: any) => {
    return (
        <div className={`Home-Desktop ${currentTheme}`}>
            <HomeHero />
            <About />
            <HomePartnerDesktop />
        </div>
    );
};

const HomeMobile = ({ currentTheme }: any) => {
    return (
        <div className={`Home-Mobile ${currentTheme}`}>
            <HomeHeroMobile />
            <AboutMobile />
            <HomePartnerMobile />
        </div>
    );
};

const Home = ({ currentTheme }: any) => {
    const { width } = useViewportSize();
    return (
        <>
            {width <= 786 ? (
                <>
                    <HomeMobile currentTheme={currentTheme} />
                </>
            ) : (
                <>
                    <HomeDesktop currentTheme={currentTheme} />
                </>
            )}
        </>
    );
};

export default Home;