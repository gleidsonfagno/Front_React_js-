function Post({subtitle, title, children, author, date, id}) {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p>
        {children}
      </p>
      <div className="flex pt-2">
        <div className="img-profile">
          <img src="https://github.com/gleidsonfagno.png" alt="img" />
        </div>
        <div className="description-profile ml-3">
          <h6 className="color-blue">{author} </h6>
          <p>{date} </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
