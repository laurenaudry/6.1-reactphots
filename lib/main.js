import React from 'react'
import Albums from './Albums'

export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="heading">Photo Albums 2.0</h1>
        <div>
          <Albums/>
        </div>
      </main>
    )
  }
})
