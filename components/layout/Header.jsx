import Image from 'next/image'
import Link from 'next/link'
// import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  // const [active, setActive] = useState(false)
  // const toggleMenu = () => setActive(!active)
  // const links = [
  //   { title: 'Games', url: '/games' },
  //   { title: 'News', url: '/' },
  //   { title: 'Articles', url: '/articles' },
  //   { title: 'Teams', url: '/teams' },
  //   { title: 'Live Score', url: '/live-score' },
  //   { title: 'Ranking', url: '/ranking' },
  //   { title: 'Forum', url: '/forum' },
  // ]
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link href="/" passHref>
            <Image
              src="/icons/Logo Desktop.svg"
              alt="logo"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
        {/* <div className="menu">
          {links.map((link) => (
            <NavLink
              to={link.url}
              className="menu-item"
              exact
              key={link.title}
              onClick={() => setActive(false)}
            >
              <div>{link.title}</div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </NavLink>
          ))}
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </div>
  )
}

export default Header
