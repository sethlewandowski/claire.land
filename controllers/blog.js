exports.getBlogPage = (req, res) => {
  console.log(req.url);
  res.render("pages/blog");
};

exports.getBlogPost = (req, res) => {
  console.log(req.url);
  res.render(`pages/${req.url}`);
};
