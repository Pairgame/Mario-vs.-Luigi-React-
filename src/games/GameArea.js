import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GameArea.css'
import ScoreArea from './ScoreArea'
import ClickMe from './ClickMe'
import Mario from './Mario'
import Luigi from './Luigi'
import Vine from './Vine'
import ThemeSong from './ThemeSong'

class GameArea extends PureComponent {

//This part should count the clicks made and send them to the API to compare between players.
// API should then send the result to the ScoreArea

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
        <ThemeSong />
    	</div>
    )
  }
}

export default GameArea
