import { useViewportSize } from '@mantine/hooks';
import './index.scss';

const ReportProblemDesktop = ({ colorScheme }: any) => {
  return (
    <div className={`ReportProblem ${colorScheme === 'light' ? '' : 'dark'}`}>
      Report a Problem
    </div>
  );
};

const ReportProblemMobile = ({ colorScheme }: any) => {
  return (
    <div
      className={`ReportProblem-Mobile ${
        colorScheme === 'light' ? '' : 'dark'
      }`}
    >
      Report a Problem Mobile
    </div>
  );
};

const ReportProblem = ({ colorScheme }: any) => {
  const { width } = useViewportSize();
  return (
    <>
      {width <= 786 ? (
        <ReportProblemMobile colorScheme={colorScheme} />
      ) : (
        <ReportProblemDesktop colorScheme={colorScheme} />
      )}
    </>
  );
};

export default ReportProblem;
