import {Spinner} from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
      <Spinner animation="grow" variant="secondary" />
      <p>Cargando...</p>
    </div>
);
};