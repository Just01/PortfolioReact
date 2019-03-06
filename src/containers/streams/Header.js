import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../login/GoogleAuth'
import { changeActivePage } from "../../redux/actions"
import {connect} from "react-redux"

class Header extends React.Component {

  changeActivePage = page => {
    this.props.changeActivePage(page)
  }

  checkActiveStyle = page => (page === this.props.activePage ? "active item" : "item")

  render() {
    return (
      <div className="ui pointing menu">

        <Link
          to="/"
          className={this.checkActiveStyle("home")}
          onClick={() => this.changeActivePage("home")}
        >
          Home
        </Link>

        <div className="right menu">
          <Link
            to="/streams/new"
            className={this.checkActiveStyle("createNew")}
            onClick={() => this.changeActivePage("createNew")}
          >
            Create New
          </Link>
          <GoogleAuth/>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePage: state.navigation.activePage,
  }
}

export default connect(mapStateToProps, { changeActivePage })(Header)