const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{margin:"10rem"}}>
      <div
        className="spinner-border text-danger"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
