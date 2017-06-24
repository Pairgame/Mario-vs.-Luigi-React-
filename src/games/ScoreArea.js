import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ScoreArea.css'

class ScoreArea extends PureComponent {

  render() {
    const player1ClickCount = this.props.player1ClickCount
    return (
      <div className="score-area">
        <h3>Score</h3>
        <p>{ player1ClickCount }</p>
    	</div>
    )
  }
}

const mapStateToProps = ({games, currentGame }) => (
  { player1ClickCount: 0, player2ClickCount: 0 }
)

export default connect(mapStateToProps)(ScoreArea)
