import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const formattedObj = {
    competingTeamLogo: eachMatch.competing_team_logo,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    competingTeam: eachMatch.competing_team,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = formattedObj
  console.log(eachMatch)
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing_team_logo"
      />
      <p className="competing_team-text">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={matchStatus === 'Won' ? 'won-text' : 'lost-text'}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
