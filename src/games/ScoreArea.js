import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ScoreArea.css'

class ScoreArea extends PureComponent {

  render() {
    const player1ClickCount = this.props.player1ClickCount
    const player2ClickCount = this.props.player2ClickCount
    return (
      <div className="score-area">
        <h3>Score</h3>
        <p>player 1: { player1ClickCount }</p>
        <p>player 2: { player2ClickCount }</p>
    	</div>
    )
  }
}

const mapStateToProps = ({games, currentGame }) => (
  { player1ClickCount: 0, player2ClickCount: 0 }
)

export default connect(mapStateToProps)(ScoreArea)
