import React from 'react'

import quotes from './all_quotes.json'
import Quote from './Quote'

export default () => (
  <main>
    { quotes.map((quote, i) => (
      <Quote key={i} quote={quote}/>
    ))}
  </main>
)
