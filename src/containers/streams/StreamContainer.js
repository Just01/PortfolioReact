import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { StreamCreate, StreamDelete, StreamDetail, StreamEdit, StreamList, Header } from './streams'

export default class StreamContainer extends React.Component {

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit" exact component={StreamEdit}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
            <Route path="/streams/show" exact component={StreamDetail}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
