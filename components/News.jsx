import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NewsImg from '../public/images/news/news_new.png'
import NewsImgMob from '../public/images/news/news_mob.png'
const News = ({ news }) => {
  return (
    <div className="category-block">
      <div style={{ width: '100%' }}>
        <div className="category-block__label">
          <Image src={NewsImg} alt="NEWS" layout="fill" objectFit="fill" />
        </div>
        <div className="category-block__label-mob">
          <Image src={NewsImgMob} alt="NEWS" layout="fill" objectFit="fill" />
        </div>
      </div>
      {news.map((article, i) => (
        <NewsArticle key={i} article={article} />
      ))}
    </div>
  )
}
export default News

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <div className="news-article-top">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="fill"
        />
        {/* <div className="news-article-top__label">{label}</div> */}
      </div>
      <div className="news-article-content">
        <div className="news-article__title">
          <Link href={`/${article.categoryId}/${article.id}`} passHref>
            {article.title}
          </Link>
        </div>
        <div className="news-article-bottom">
          <div className="news-article__author">{article.author}</div>
          <div className="news-article__date">{article.date}</div>

          {/* <div className="news-article__comments">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H16V12H4L0 16V0Z" fill="#4C4F7A" />
            </svg>
            <span>0</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
