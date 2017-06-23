import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Mario extends PureComponent {

  render () {
    return (
      <div>
        <img className="sprite mario" src="http://res.cloudinary.com/hedgehogs4578/image/upload/e_make_transparent:10/v1498062873/mario_yllwvl.png" />
      </div>
    )
  }
}

export default Mario
