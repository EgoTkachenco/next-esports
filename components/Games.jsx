import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Games = ({ games }) => {
  let colors = ['red', 'yellow', 'grey', 'green', 'pink', 'platinum']
  return (
    <div className="category-block games-block">
      <div>
        <div className="category-block__label">
          <Image
            src="/images/games/games_new.png"
            layout="fill"
            objectFit="fill"
            alt="GAMES"
          />
        </div>
        <div className="category-block__label-mob">
          <Image
            src="/images/games/games_mob.png"
            layout="fill"
            objectFit="fill"
            alt="GAMES"
          />
        </div>
      </div>
      {games.map((game) => (
        <GamesItems
          key={game.id}
          title={game.title}
          image={game.image}
          color={game.color}
          url={game.url}
        />
      ))}
    </div>
  )
}
export default Games

const GamesItems = ({ title, image, color, url }) => {
  return (
    <Link href={`/${url}`} passHref>
      <div className={`games-items ${color}`}>
        <img
          className="games-items__image"
          src={process.env.NEXT_PUBLIC_SERVER_URL + image.url}
          alt={title}
        />
        <div className="games-items__title">{title}</div>
      </div>
    </Link>
  )
}
