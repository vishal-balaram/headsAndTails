// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsTailsImageUrl:
      'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    countHeads: 0,
    countTails: 0,
  }

  getRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 10)

    if (randomNumber % 2 === 0) {
      this.setState({
        headsTailsImageUrl:
          'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({countHeads: prevState.countHeads + 1}))
    } else {
      this.setState({
        headsTailsImageUrl:
          'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({countTails: prevState.countTails + 1}))
    }
  }

  render() {
    const {headsTailsImageUrl, countHeads, countTails} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="heads-paragraph">Heads (or) Tails</p>
          <img
            src={headsTailsImageUrl}
            alt="toss result"
            className="coin-image"
          />
          <button
            onClick={this.getRandomNumber}
            type="button"
            className="button"
          >
            Toss Coin
          </button>
          <div className="total-count-container">
            <p className="total-count">Total: {countHeads + countTails}</p>
            <p className="total-count">Heads: {countHeads}</p>
            <p className="total-count">Tails: {countTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
