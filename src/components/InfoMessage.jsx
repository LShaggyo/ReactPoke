import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

export const InfoMessage = ({message = "Error genérico", color = "primary"}) => {
  return (
    <Alert variant={color}>
      {message}
    </Alert>
);
};


InfoMessage.propTypes = {
  message: PropTypes.string,
	color: PropTypes.string
};
