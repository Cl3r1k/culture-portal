import React from 'react'

const List = ({ data, isOrderedList = false }) => {

  return (
    isOrderedList ?
      (<ol className="box-with-bg">
        {data.map((item, i) => <li key={`id-${i}`}>{item}</li>)}
      </ol>)
      :
      (<ul className="box-with-bg">
        {data.map((item, i) => <li key={`id-${i}`}>{item}</li>)}
      </ul>)
  )
}

export default List