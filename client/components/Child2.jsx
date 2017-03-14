import React from 'react'

const Child2 = props => {
  return (
      <div>
        <h2>Child2</h2>
        <a href='' onClick={e => props.changeChild('Child1', e)}>Change Child</a>
      </div>
    )
  }

export default Child2
