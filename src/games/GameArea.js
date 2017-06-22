import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GameArea.css'
import ScoreArea from './ScoreArea'
import ClickMe from './ClickMe'

class GameArea extends PureComponent {

  // pauseUpdate(visible, won) {
  //   const component = this
  //   setTimeout(() => {
  //     component.setState({ visible, won })
  //   }, 1000)
  //
  // }

  render() {

    return (
      <div className="game-page">
        <div className="game-area">
      		<img className="background-game" src='http://res.cloudinary.com/hedgehogs4578/image/upload/v1498062837/background_nbjnpk.jpg' />
          <ClickMe />
        </div>
        <ScoreArea />
    	</div>
    )
  }
}

export default GameArea
