import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ClickMe.css'

class ClickMe extends PureComponent {

  ClickCount() {
    const { liked, likes } = this.props
    const likesOtherThanYours = (likes || 0) - 1

    if (liked && likesOtherThanYours > 0) {
      return `You and ${likesOtherThanYours} others like this`
    }

    if (liked) return 'You like this'

    if (likes > 0) return `${likes} other${likes > 1 ? 's' : ''} like${likes > 1 ? '' : 's'} this`

    return null
  }

  render() {
    const { addClickCount } = this.props
    return (
      <div className="clickbutton">
        <button onClick={ addClickCount }>
          <p>Click me!</p>
        </button>
      </div>
    )
  }
}


export default ClickMe
