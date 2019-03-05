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
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    switch (this.state.isSignedIn) {
      case false:
        return (
          <button
            onClick={this.onSignInClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign In
          </button>
        )
      case true:
        return (
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Sign Out
          </button>
        )
      default:
        return (
        <button className="ui red google button">
          <i className="google icon" />
          Waiting...
        </button>
      )
    }
  }
  render() {
    return (
      <div className="ui item">
        {this.renderAuthButton()}
      </div>
    )
  }
}
