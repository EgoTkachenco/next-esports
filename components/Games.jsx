import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Games = () => {
  const games = [
    {
      title: 'CS:GO',
      image: '/images/games/Rainbow.png',
      color: 'grey',
      url: 'cs-go',
    },
    {
      title: 'Dota 2',
      image: '/images/games/Dota.png',
      color: 'red',
      url: 'dota-2',
    },
    {
      title: 'League of Legends',
      image: '/images/games/LoL.png',
      color: 'green',
      url: 'league-of-legends',
    },
    {
      title: 'COD: Warzone',
      image: '/images/games/codeWarzone.png',
      color: 'yellow',
      url: 'cod-warzone',
    },
    {
      title: 'Overwatch',
      image: '/images/games/Overwatch.png',
      color: 'pink',
      url: 'overwatch',
    },
    {
      title: 'Valorant',
      image: '/images/games/valorant.png',
      color: 'platinum',
      url: 'valorant',
    },
  ]
  return (
    <div className="category-block games-block">
      <div>
        <div className="category-block__label">
          <Image
            src="/images/games/games.png"
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
      {games.map((game, i) => (
        <GamesItems
          key={i}
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
    <Link href={`/articles/${url}`} passHref>
      <div className={`games-items ${color}`}>
        <Image src={image} layout="fill" objectFit="contain" alt={title} />
        <div className="games-items__title">{title}</div>
      </div>
    </Link>
  )
}
