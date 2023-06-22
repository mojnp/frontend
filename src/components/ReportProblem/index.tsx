import { useViewportSize } from '@mantine/hooks';
import './index.scss';

const ReportProblemDesktop = () => {
  return <div className="ReportProblem">Report a Problem</div>;
};

const ReportProblemMobile = () => {
  return <div className="ReportProblem-Mobile">Report a Problem Mobile</div>;
};

const ReportProblem = () => {
  const { width } = useViewportSize();
  return (
    <>{width <= 786 ? <ReportProblemMobile /> : <ReportProblemDesktop />}</>
  );
};

export default ReportProblem;
