import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './character.css'

class Luigi extends PureComponent {

  render () {
    return (
      <div>
        <img className="sprite luigi" src="http://res.cloudinary.com/hedgehogs4578/image/upload/v1498221130/g4184_f42ia3.png" />
      </div>
    )
  }
}

export default Luigi
