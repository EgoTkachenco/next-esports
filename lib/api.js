const { axios } = require('./axios')

module.exports = {
  getCategories: () => axios.get('/categories'),
  getNews: () => axios.get('/articles?_sort=createdAt:DESC&_limit=6'),
  getCategory: (url) => axios.get(`/categories?url_in=${url}`),
  getCategoryArticles: (category, page, limit) =>
    axios.get(
      `/articles?category_in=${category}&_start=${
        limit * (page - 1)
      }&_limit=${limit}`
    ),
  getArticles: () => axios.get('/articles'),
  getArticle: (url) => axios.get(`/articles/?url_in=${url}`),
}
