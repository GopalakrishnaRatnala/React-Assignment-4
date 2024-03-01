import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {name, teamImageUrl, id} = eachTeam
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
