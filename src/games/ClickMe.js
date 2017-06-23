import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import PropTypes from 'prop-types'
import './ClickMe.css'


class ClickMe extends PureComponent {
    componentWillMountfunction() {
        const { game, fetchGames, getCurrentGame, players, subscribeToGames, subscribed } = this.props
        const { clickCount } = this.props.params

    }
    // addClickCount() {
    //   const clickCount = +1
    // }

    // api needs gameId, and clickCount, playerid can be taken out of params.

  render() {
    // const { addClickCount } = addClickCount
    return (
      <div className="clickbutton">
        <button >
          <p>Go! Go! Go!!</p>
        </button>
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

export default connect(mapStateToProps, { fetchGames, subscribeToGames, push, getCurrentGame })(ClickMe)
