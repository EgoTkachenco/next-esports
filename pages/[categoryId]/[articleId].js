import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Icon from '../../components/common/Icon'
import { getArticle, getArticles } from '../../lib/api'
import { useRouter } from 'next/router'
import { formatDate } from '../../lib/date'
function ArticlePage({ article }) {
  const router = useRouter()
  useEffect(() => {
    let images = document.querySelectorAll('#content img')
    for (let img of images) {
      console.log(img.src.slice(img.src.search('/uploads', -1)))
      img.src =
        process.env.NEXT_PUBLIC_SERVER_URL +
        img.src.slice(img.src.search('/uploads', -1))
    }
  }, [])
  return (
    <>
      <Head>
        <title>{article?.title}</title>
        <meta
          name="description"
          content={article?.content?.slice(0, 250) + '...'}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://outrun.gg${router.asPath}`,
              },
              headline:
                'QYOU Partners With Capcom for Resident Evil Village TikTok Channel',
              image: 'https://outrun.gg' + article?.image,
              author: {
                '@type': 'Organization',
                name: 'outrun.gg',
              },
              publisher: {
                '@type': 'Organization',
                name: '',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://outrun.gg/icons/Logo.svg',
                },
              },
              datePublished: '2021-07-11',
            }),
          }}
        ></script>
        <meta property="og:title" content={article?.title} />
        <meta property="og:site_name" content="outrun.gg" />
        <meta property="og:url" content={`https://outrun.gg${router.asPath}`} />
        <meta
          property="og:description"
          content={article?.content?.slice(0, 250) + '...'}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={'https://outrun.gg' + article?.image}
        />

        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@" />
        <meta
          name="twitter:description"
          content={article?.content?.slice(0, 250) + '...'}
        />
        <meta name="twitter:app:name:iphone" content="" />
        <meta name="twitter:app:id:iphone" content="" />
        <meta name="twitter:app:name:ipad" content="" />
        <meta name="twitter:app:id:ipad" content="" />
        <meta name="twitter:app:name:googleplay" content="" />
        <meta name="twitter:app:id:googleplay" content="" />
        <meta name="twitter:app:country" content="" />
      </Head>
      <div className="content">
        <div className="article-page">
          <div className="article__back">
            <Image
              src="/images/article_back.png"
              layout="fill"
              objectFit="fill"
              alt="back"
            />
          </div>
          <div className="article__back-mob">
            <Image
              src="/images/article_back_mob.png"
              layout="fill"
              objectFit="fill"
              alt="back"
            />
          </div>

          <div className="article">
            <h1 className="article__title">{article.title}</h1>
            <div className="article-info">
              <div className="article-info__date">
                by {article.author} - {formatDate(article.createdAt)}
              </div>
              <div className="article-info__reading-time">
                Reading Time: {article.readingTime} read
              </div>
            </div>

            <div className="article__illustration">
              <img
                src={process.env.NEXT_PUBLIC_SERVER_URL + article.image.url}
                alt={article.title}
              />
            </div>

            <div className="article-content" id="content">
              <SocialLinks />
              <div
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              ></div>
            </div>

            {/* <div className="article-author">
              <div className="article-author__avatar">
                <Image
                  src="/images/avatar.png"
                  layout="fill"
                  objectFit="fill"
                  alt="James Fudge"
                />
              </div>
              <div className="article-author-content">
                <div className="article-author__title">James Fudge</div>
                <div>
                  James has been covering the video games industry for nearly 23
                  years. He currently serves as The Esports Observer's senior
                  editor.
                </div>
                <div className="article-author-links">
                  <a href="#">
                    <Icon icon="twitter" size="1.5rem" />
                  </a>
                  <a href="#">
                    <Icon icon="linkedIn" size="1.5rem" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

const SocialLinks = () => {
  const links = [
    {
      title: 'Twitter',
      icon: 'twitter',
    },
    {
      title: 'LinkedIn',
      icon: 'linkedIn',
    },
    {
      title: 'Reddit',
      icon: 'reddit',
    },
    {
      title: 'Share',
      icon: 'share',
    },
  ]
  return (
    <div className="article-social">
      {links.map((link) => (
        <div key={link.title} className="article-social__link">
          <Icon icon={link.icon} size="1.5rem" />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps({ params: { categoryId, articleId } }) {
  const article = await getArticle(articleId)
  return { props: { article: article[0] } }
}

export async function getStaticPaths() {
  const articles = await getArticles()
  const params = articles.map((article) => ({
    params: { categoryId: article.category.url, articleId: article.url },
  }))
  return {
    paths: params,
    fallback: false, // See the "fallback" section below
  }
}

export default ArticlePage
