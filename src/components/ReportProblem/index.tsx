import { useViewportSize } from '@mantine/hooks';
import './index.scss';

const ReportProblemDesktop = ({ currentTheme }: any) => {
  return (
    <div className={`ReportProblem ${currentTheme}`}>Report a Problem</div>
  );
};

const ReportProblemMobile = ({ currentTheme }: any) => {
  return (
    <div className={`ReportProblem-Mobile ${currentTheme}`}>
      Report a Problem Mobile
    </div>
  );
};

const ReportProblem = ({ currentTheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <ReportProblemMobile currentTheme={currentTheme} />
      ) : (
        <ReportProblemDesktop currentTheme={currentTheme} />
      )}
    </>
  );
};

export default ReportProblem;
