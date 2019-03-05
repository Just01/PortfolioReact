import React from 'react'
import { OAUTH_CLIENT_ID } from '../../api/keys'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../redux/actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: OAUTH_CLIENT_ID,
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()

        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = isSignedIn => {
    const userId = this.auth.currentUser.get().getId()
    isSignedIn ? this.props.signIn(userId) : this.props.signOut()
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    switch (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)