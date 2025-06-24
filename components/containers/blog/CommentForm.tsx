const CommentForm = () => {
  return (
    <div className="comment-form-wrap d-block pt-5">
      <h3>Post Comment</h3>
      <form action="#" className="comment-form">
        <div className="single-form-input">
          <textarea placeholder="Type your comments...."></textarea>
        </div>
        <div className="single-form-input">
          <input type="text" placeholder="Type your name...." />
        </div>
        <div className="single-form-input">
          <input type="email" placeholder="Type your email...." />
        </div>
        <div className="single-form-input">
          <input type="text" placeholder="Type your website...." />
        </div>
        <button className="theme-btn center" type="submit">
          <span>
            <i className="fal fa-comments"></i>Post Comment
          </span>
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
