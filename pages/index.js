import Head from 'next/head'
import Image from 'next/image'
import BreadCrumbs from '../components/common/BreadCrumbs'
import News from '../components/News'
import Games from '../components/Games'
import DATA from '../public/articles'
function Home({ news }) {
  return (
    <>
      <Head>
        <title>
          Outrun.gg: All About eSports Games, News, Events, Teams, Community
        </title>
        <meta
          name="description"
          content="Are you a eSports fan? You're at the right place - find out more about current community news, teams, tournaments and even more eSports-related things on the Outrun.gg website"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'Outrun.gg',
              url: '',
              logo: '',
            }),
          }}
        ></script>
      </Head>
      <div className="home-page__back">
        <Image
          src="/images/home_back.png"
          layout="fill"
          objectFit="fill"
          alt="back"
          quality="100"
        />
      </div>
      <h1 style={{ opacity: 0, position: 'absolute' }}>
        Dive Into the eSports Industry With Outrun.gg!
      </h1>
      <div className="content">
        <div className="home-page">
          <BreadCrumbs />

          <div className="home-page__categories">
            <News news={news} />
            <Games />
          </div>
        </div>
      </div>
    </>
  )
}
Home.getInitialProps = async (ctx) => {
  const news = DATA.articles.filter((article) => article.categoryId === 'news')
  return { news }
}
export default Home
