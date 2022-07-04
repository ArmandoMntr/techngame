import Spinner from "react-bootstrap/Spinner";
import "./SpinnerLoad.scss";
const SpinnerLoad = () => {
  return (
    <div className="spinnerWrapper">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerLoad;
