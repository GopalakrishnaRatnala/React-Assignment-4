import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getReqMatchData()
  }

  getReqMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const reqData = await response.json()
    const formattedObj = {
      latestMatchDetails: reqData.latest_match_details,
      recentMatches: reqData.recent_matches,
      teamBannerUrl: reqData.team_banner_url,
    }
    this.setState({
      latestMatchDetails: formattedObj.latestMatchDetails,
      recentMatches: formattedObj.recentMatches,
      teamBannerUrl: formattedObj.teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div className="team-match-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <div>
              <h1 className="latest-matches-heading">Latest Matches </h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
              <ul className="match-cards-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
