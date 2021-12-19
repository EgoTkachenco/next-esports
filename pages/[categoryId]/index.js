import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BreadCrumbs from '../../components/common/BreadCrumbs'
import { getCategories, getCategory, getCategoryArticles } from '../../lib/api'
import { formatDate } from '../../lib/date'

function CategoryPage({ category }) {
  const [page, setPage] = useState(1)
  const limit = 10
  let isPrevDisabled = page === 1
  let maxPage = Math.ceil(category.articlesCount / limit)
  let isNextDisabled = page >= maxPage
  const [articles, setArticles] = useState([])
  const changePage = (mode) => {
    switch (mode) {
      case 'prev':
        setPage(page - 1)
        break
      case 'next':
        setPage(page + 1)
        break
      default:
    }
  }
  useEffect(() => {
    getCategoryArticles(category.id, page, limit).then((res) => {
      setArticles(res)
    })
  }, [category.id, page])
  if (!category) return <div className="content"></div>
  return (
    <>
      <Head>
        <title>Outrun.gg</title>
        <meta name="description" content="Esports. News you need" />
      </Head>
      <div className="content">
        <div className="category-page">
          <div className="category__back">
            <img
              style={{ width: '100%' }}
              src={
                process.env.NEXT_PUBLIC_SERVER_URL +
                category.pageImage.formats.large.url
              }
              alt="back"
            />
          </div>
          <div className="category__back-mob">
            <img
              src={
                process.env.NEXT_PUBLIC_SERVER_URL +
                category.pageImage.formats.small.url
              }
              alt="back"
            />
          </div>
          <BreadCrumbs />
          <h1 className="category-page__title">{category.title}</h1>
          <div className="category-page__articles">
            {articles.map((article) => (
              <Article
                key={article.id}
                article={article}
                category={category.url}
              />
            ))}
          </div>
          <div className="category-page-pagination">
            <button
              className="category-page-pagination__btn btn btn-primary"
              onClick={() => changePage('prev')}
              disabled={isPrevDisabled}
            >
              prev
            </button>
            <span className="category-page-pagination__active-page">
              {page} / {maxPage}
            </span>
            <button
              className="category-page-pagination__btn btn btn-primary"
              onClick={() => changePage('next')}
              disabled={isNextDisabled}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const Article = ({ article, category }) => {
  return (
    <div className="category-page-article">
      <div className="category-page-article__preview">
        <img
          className="category-page-article__preview-img"
          src={process.env.NEXT_PUBLIC_SERVER_URL + article.image.url}
          layout="fill"
          alt={article.title}
        />
      </div>
      <div className="category-page-article-content">
        <div className="category-page-article__title">{article.title}</div>
        <div className="category-page-article__text">{article.description}</div>
        <div className="category-page-article-bottom">
          <div className="category-page-article__author">{article.author}</div>
          <div className="category-page-article__date">
            {formatDate(article.createdAt)}
          </div>
          <Link href={`/${category}/${article.url}`} passHref>
            <div className="category-page-article__more">
              Read more
              <svg
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 15V0L10 7.5L0 15Z" fill="#8CC63F" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params: { categoryId } }) {
  let category = await getCategory(categoryId)
  return { props: { category: category[0] } }
}

export async function getStaticPaths() {
  let categories = await getCategories()
  const params = categories.map((category) => ({
    params: { categoryId: category.url },
  }))
  return {
    paths: params,
    fallback: false, // See the "fallback" section below
  }
}

export default CategoryPage
