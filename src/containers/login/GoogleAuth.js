import React from 'react'
import { OAUTH_CLIENT_ID } from '../../api/keys'

export default class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: OAUTH_CLIENT_ID,
        scope: ['profile', 'email'],
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  }

  renderAuthButton = () => {
    switch (this.state.isSignedIn) {
      case false:
        return <div>You're not signed in!</div>
      case true:
        return <div>You're signed in!</div>
      default:
        return <div>I don't know if you're signed in!</div>
    }
  }
  render() {
    return (
      <div className="ui container">
        {this.renderAuthButton()}
      </div>
    )
  }
}
