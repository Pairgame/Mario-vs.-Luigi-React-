import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GameArea.css'
import ScoreArea from './ScoreArea'
import ClickMe from './ClickMe'
import Mario from './Mario'
import Luigi from './Luigi'
import Vine from './Vine'

class GameArea extends PureComponent {

//

  render() {

    return (
      <div className="game-page">
        <div className="game-area">
      		<img className="background-game" src='http://res.cloudinary.com/hedgehogs4578/image/upload/v1498062837/background_nbjnpk.jpg' />
          <div className="mario">
            <Vine/>
          </div>
          <Mario />
          <div className="luigi">
            <Vine />
          </div>
          <Luigi />
          <ClickMe />
        </div>
        <ScoreArea />
    	</div>
    )
  }
}

export default GameArea
