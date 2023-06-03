import FooterMobile from './FooterMobile/FooterMobile';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import { Route, Routes } from 'react-router-dom';
import NewsMobile from './NewsMobile/NewsMobile';
import TourismMobile from './TourismMobile/TourismMobile';
import ReportProblemMobile from './ReportProblemMobile/ReportProblemMobile';

const MobileUI = () => {
  return (
    <>
      <HeaderMobile />
      <Routes>
        <Route path="/" element={<NewsMobile />} />
        <Route path="/tourism" element={<TourismMobile />} />
        <Route path="/report-a-problem" element={<ReportProblemMobile />} />
      </Routes>
      <FooterMobile />
    </>
  );
};

export default MobileUI;
