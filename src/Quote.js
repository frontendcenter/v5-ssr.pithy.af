import React from 'react'

export default ({ quote }) => (
  <div className="Quote -main">
    <div className="Quote_Inner">
      <div className="Quote_Short">
        <em>{ quote.emphasised }</em>
        { quote.remainder }
      </div>
      <div className="Quote_Attribution">
        { quote.attribution }
      </div>
      <div className="Quote_Work">
        { quote.work }
      </div>
    </div>
  </div>
)
