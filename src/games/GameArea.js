import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GameArea.css'

class GameArea extends PureComponent {
  static propTypes = {
    symbol: PropTypes.string.isRequired,
    visible: PropTypes.bool,
    won: PropTypes.bool,
  }

  // pauseUpdate(visible, won) {
  //   const component = this
  //   setTimeout(() => {
  //     component.setState({ visible, won })
  //   }, 1000)
  //
  // }

  render() {

    return (
      <div>
    		<img className="background-game" src='http://res.cloudinary.com/hedgehogs4578/image/upload/v1498062837/background_nbjnpk.jpg' />
    	</div>
    )
  }
}

export default GameArea
