import React from 'react'

export default class SearchBar extends React.Component {
  state = { temp: '' }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.temp)
  }

  render() {
    return (
      <div className="ui segment">
        <h4>Search</h4>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.temp}
              onChange={e => this.setState({ temp: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
