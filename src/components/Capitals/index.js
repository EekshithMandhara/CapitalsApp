import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCaptialId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCaptialId: event.target.value})
  }

  getCountry = () => {
    const {activeCaptialId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCaptial => eachCaptial.id === activeCaptialId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCaptialId} = this.state
    const country = this.getCountry(activeCaptialId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1>Countries And Capitals</h1>
          <div className="qustion-container">
            <select className="capital-select" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCaptial => (
                <option
                  key={eachCaptial.id}
                  value={eachCaptial.id}
                  className="option"
                >
                  {eachCaptial.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
