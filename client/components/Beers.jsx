import React from 'react'

const ListBeer = props => {
  return (
    <div>
      <ol>
        { props.info.map (beer => {
          return (
            <div key={beer.name}>
              <li>{beer.name}</li>
              <ul>
                <li>Brewery: {beer.brewery}</li>
                <li>Country: {beer.country}</li>
                <li>Style: {beer.style}</li>
                <li>ABV: {beer.abv}</li>
              </ul>
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default ListBeer
