import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letters: '',
  }

  onChangeLetters = event => {
    this.setState({letters: event.target.value})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="container">
        <div className="card1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="phrase"
            className="input-phrase"
            value={letters}
            onChange={this.onChangeLetters}
          />
          <p className="btn">
            {/* No.of letters: 0  */}
            No.of letters: {letters.length}
          </p>
        </div>
        <div className="card2">
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
