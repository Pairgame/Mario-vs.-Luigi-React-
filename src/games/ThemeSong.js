import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class ThemeSong extends PureComponent {

  render () {
    return (
        <audio  src="http://res.cloudinary.com/hedgehogs4578/video/upload/v1498224261/Mario_wtps3a.mp3" autoPlay="true" loop="true" className="themesong"/>
    )
  }
}

export default ThemeSong
