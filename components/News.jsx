import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NewsImg from '../public/images/news/news.png'
import NewsImgMob from '../public/images/news/news_mob.png'
const News = ({ news }) => {
  // const articles = [
  //   {
  //     title: 'HyperX named peripherals partner for Red Bull Racing Esports',
  //     image: News1,
  //     author: 'Jonno Nicholson',
  //     date: 'April 27, 2021',
  //     label: 'Partnership & Sponsorship',
  //   },
  //   {
  //     title: 'FaZe Clan signs NFL quarteback Kyler Murray',
  //     image: News2,
  //     author: 'Jonno Nicholson',
  //     date: 'April 27, 2021',
  //     label: 'North America',
  //   },
  //   {
  //     title:
  //       'Elsa Esports partners with Relog Media, Funspark and GRID to create...',
  //     image: News3,
  //     author: 'Jonno Nicholson',
  //     date: 'April 27, 2021',
  //     label: 'CS:GO',
  //   },
  //   {
  //     title:
  //       'Semper Fortis Esports raises $2.55 M from Aquis Stock Exchange listing',
  //     image: News4,
  //     author: 'Jonno Nicholson',
  //     date: 'April 27, 2021',
  //     label: 'Investmans, M&A',
  //   },
  // ]
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
          <Link href={`/articles/${article.categoryId}/${article.id}`}>
            {article.title}
          </Link>
        </div>
        <div className="news-article-bottom">
          <div className="news-article__author">{article.author}</div>
          <div className="news-article__date">{article.date}</div>

          <div className="news-article__comments">
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
          </div>
        </div>
      </div>
    </div>
  )
}
