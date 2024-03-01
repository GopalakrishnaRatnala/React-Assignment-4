import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formattedData = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = formattedData
  return (
    <div className="latest-match-card">
      <div className="first-innings-details-container">
        <div className="first-innings-details">
          <p className="competingTeam-text">{competingTeam}</p>
          <p className="date-text">{date}</p>
          <p className="venue-text">{venue}</p>
          <p className="result-text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr />
      <div className="innings-container">
        <p className="heading">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="heading">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="heading">Man Of The Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="heading">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
