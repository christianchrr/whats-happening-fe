import React from "react"

const StateDropdown = ({ handleChange, value }) => {

  const stateArray = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL",
    "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
    "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA",
    "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ]

  return (
    <div>
      <label htmlFor="locationState">
        <select name="locationState" handleChange={handleChange} value={value}>
          <option selected disabled value={""}>State</option>
          {stateArray.map((option, index) => {
            return (
              <option value={option}>{option}</option>
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default StateDropdown