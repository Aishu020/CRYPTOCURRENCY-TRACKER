import { Link } from "react-router-dom"

const CoinTrending = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="font-lavender mb-2 p-2 border-blue-200 border-2 rounded hover:bg-purple-200">
        <div className="flex items-center gap-1">
          <span className="font-times">{coin.score+1}.</span>
          <img className="w-6" src={coin.small} alt={coin.name} />
          <p>{coin.name}</p>
          <small className="text-xs">({coin.symbol})</small>
        </div>
      </div>
    </Link>
  )
}

export default CoinTrending