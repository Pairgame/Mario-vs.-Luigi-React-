import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import CreateGameButton from './CreateGameButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import WatchGameIcon from 'material-ui/svg-icons/image/remove-red-eye';
import JoinGameIcon from 'material-ui/svg-icons/social/person-add';
import PlayGameIcon from 'material-ui/svg-icons/hardware/videogame-asset';

class Lobby extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchGames, subscribeToGames } = this.props
    fetchGames()
    if (!subscribed) subscribeToGames()
  }

  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>
        <CreateGameButton />
        <Paper className="paper">
          <Menu>
            { this.props.games.map(this.renderGame.bind(this))}
          </Menu>
        </Paper>
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

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push })(Lobby)
