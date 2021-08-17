import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import BreadCrumbs from '../../../components/common/BreadCrumbs'
import DATA from '../../../public/articles.json'
function CategoryPage({ articles, category }) {
  if (!category) return <div className="content"></div>
  return (
    <>
      <Head></Head>
      <div className="content">
        <div className="category-page">
          <div className="category__back">
            <Image
              src={category.image}
              layout="responsive"
              width="1920"
              height="400"
              alt="back"
            />
          </div>
          <BreadCrumbs />
          <div className="category-page__title">{category.title}</div>
          <div className="category-page__articles">
            {articles.map((article, i) => (
              <Article key={i} article={article} category={category.id} />
            ))}
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
        <Image src={article.image} layout="fill" alt={article.title} />
      </div>
      <div className="category-page-article-content">
        <div className="category-page-article__title">{article.title}</div>
        <div
          className="category-page-article__text"
          dangerouslySetInnerHTML={{
            __html: article.content.match(/<p>.*?<\/p>/g)[0],
          }}
        ></div>
        <div className="category-page-article-bottom">
          <div className="category-page-article__author">{article.author}</div>
          <div className="category-page-article__date">{article.date}</div>
          <Link href={`/articles/${category}/${article.id}`} passHref>
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
  const articles = DATA.articles.filter(
    (article) => article.categoryId === categoryId
  )
  const category = DATA.categories.find(
    (category) => category.id === categoryId
  )
  return { props: { articles, category } }
}

export async function getStaticPaths() {
  const params = DATA.categories.map((category) => ({
    params: { categoryId: category.id },
  }))
  return {
    paths: params,
    fallback: false, // See the "fallback" section below
  }
}


export default CategoryPage
