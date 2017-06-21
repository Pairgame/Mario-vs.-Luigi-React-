import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import GameArea from './GameArea'

class MarioGame extends PureComponent {
  componentWillMount() {
      const { game, fetchGames, getCurrentGame, subscribeToGames, subscribed } = this.props
      const { gameId } = this.props.params

      if (!game) fetchGames()
      getCurrentGame(gameId)
      if (!subscribed) subscribeToGames()
  }

  render () {
    return (
      <div>
      <GameArea />
      </div>
    )
  }
}


const mapStateToProps = ({ games, currentUser, subscriptions }) => (
  {
    games,
    currentUser,
    subscribed: subscriptions.includes('games'),
  }
)


export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(MarioGame)
