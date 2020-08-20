exports.getBlogPage = (req, res) => {
  console.log(req.url);
  res.render('pages/blog');
};