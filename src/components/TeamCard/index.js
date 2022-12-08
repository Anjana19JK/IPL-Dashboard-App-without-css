import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchCardDetails} = props
  const {id, name, imageUrl} = matchCardDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div>
          <img className="team-card-image" src={imageUrl} alt={`${name}`} />
          <p className="team-card-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
