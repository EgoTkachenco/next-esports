import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NewsImg from '../public/images/news/news_new.png'
import NewsImgMob from '../public/images/news/news_mob.png'
import { formatDate } from '../lib/date'
const News = ({ news }) => {
  return (
    <div className="category-block">
      <div className="category-block__label-wrapper">
        <div className="category-block__label">
          <Image src={NewsImg} alt="NEWS" layout="fill" objectFit="fill" />
        </div>
        <div className="category-block__label-mob">
          <Image src={NewsImgMob} alt="NEWS" layout="fill" objectFit="fill" />
        </div>
      </div>
      {news.map((article) => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  )
}
export default News

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <div className="news-article-top">
        <img
          className="preview"
          src={
            process.env.NEXT_PUBLIC_SERVER_URL + article.image.formats.small.url
          }
          alt={article.title}
        />
        {/* <div className="news-article-top__label">{label}</div> */}
      </div>
      <div className="news-article-content">
        <div className="news-article__title">
          <Link href={`/${article.category.url}/${article.url}`} passHref>
            {article.title}
          </Link>
        </div>
        <div className="news-article-bottom">
          <div className="news-article__author">{article.author}</div>
          <div className="news-article__date">
            {formatDate(article.createdAt)}
          </div>

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
