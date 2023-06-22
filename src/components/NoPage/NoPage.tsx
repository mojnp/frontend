import './NoPage.css';

const NoPage = ({ colorScheme }: any) => {
  return (
    <div className={`NoPage ${colorScheme === 'light' ? '' : 'dark'}`}>
      <h2>Not Found or You do not have permission.</h2>
      <h1>Error 404.</h1>
    </div>
  );
};

export default NoPage;
