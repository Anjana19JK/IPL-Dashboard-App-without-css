import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamData: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchData = await response.json()
    const updatedData = fetchData.teams.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id,
    }))
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamData} = this.state
    return (
      <ul>
        {teamData.map(eachData => (
          <TeamCard key={eachData.id} matchCardDetails={eachData} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Rings" color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            this.renderTeamsList()
          )}
        </div>
      </div>
    )
  }
}

export default Home
