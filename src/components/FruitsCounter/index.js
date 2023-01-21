import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0,banana:0}

  OnMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango,banana} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="countStyle">{mango}</span> mangoes{' '}
            <span className="countStyle">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="content">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <br />
              <button className="button" type="button" onClick={this.OnMango}>
                Eat Mango
              </button>
            </div>
            <div className="content">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button
                className="button top"
                type="button"
                onClick={this.onBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
