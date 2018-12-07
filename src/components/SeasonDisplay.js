import React from 'react'
import Spinner from './Spinner'
import './styles/SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach?",
    icon: 'sun',
  },
  winter: {
    text: "Burr, it's chilly outside!",
    icon: 'snowflake',
  },
}

export default class SeasonDisplay extends React.Component {
  state = { latitude: null, longitude: null, errorMessage: null }

  getSeason = (lat) => {
    const month = new Date().getMonth()
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        errorMessage: null,
      }),
      err => this.setState({ errorMessage: err.message })
    )
  }


  render() {
    const { errorMessage, latitude, longitude } = this.state
    const season = this.getSeason(latitude)
    const { text, icon } = seasonConfig[season]

    if (errorMessage && !latitude) {
      return <Spinner message={errorMessage} />
    }
    if (!errorMessage && latitude) {
      return (
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${icon} icon`} />
          <h1>{text}</h1>
          <i className={`icon-right massive ${icon} icon`} />
        </div>
      )
    }
    return <Spinner />
  }
}
