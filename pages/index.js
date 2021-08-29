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
        <title>Outrun.gg</title>
        <meta name="description" content="Esports. News you need" />
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
