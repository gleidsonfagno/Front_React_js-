function Post() {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo do blog</h3>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        ullamcorper, lectus in ornare facilisis, justo nunc elementum nisl, eget
        congue libero ligula eu leo. In dapibus hendrerit nisi, nec consectetur
        leo convallis ut.
      </p>
      <div className="flex pt-2">
        <div className="img-profile">
          <img src="https://github.com/gleidsonfagno.png" alt="img" />
        </div>
        <div className="description-profile ml-3">
          <h6 className="color-blue">Gleidson fagno</h6>
          <p>Aug 2, 2020 - 8 min read</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
