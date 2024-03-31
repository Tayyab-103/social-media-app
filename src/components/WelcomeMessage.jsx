const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <div>
      <center className="welcome-message">
        <h1 >There are no Posts</h1>

        <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Fetch Posts</button>
      </center>
    </div>
  );
};

export default WelcomeMessage;
