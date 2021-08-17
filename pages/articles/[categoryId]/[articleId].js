import Head from 'next/head'
import Image from 'next/image'
import Icon from '../../../components/common/Icon'
import DATA from '../../../public/articles.json'
function ArticlePage({ article }) {
  return (
    <>
      <Head></Head>
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
            <div className="article__title">{article.title}</div>
            <div className="article-info">
              <div className="article-info__date">
                by {article.author} - {article.date}
              </div>
              <div className="article-info__reading-time">
                Reading Time: 2min read
              </div>
            </div>

            <div className="article__illustration">
              <Image
                src={article.image}
                width="840"
                height="410"
                layout="responsive"
                alt={article.title}
              />
            </div>

            <div className="article-content">
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
  const article = DATA.articles.find(
    (article) => article.categoryId === categoryId && article.id === articleId
  )
  return { props: {article} }
}

export async function getStaticPaths() {
  const params = DATA.articles.map((article) => ({
    params: { categoryId: article.categoryId, articleId: article.id },
  }))
  return {
    paths: params,
    fallback: false, // See the "fallback" section below
  }
}

export default ArticlePage
