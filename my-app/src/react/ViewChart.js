import React, { useCallback } from 'react'

function ViewChart({ dataCsv }) {


  console.log('dataCsv=', dataCsv);

  return (
    <div>
      {/* <input type="text" onChange={handleInputChange} value={name} /> */}
      <div>dataCsv is: {dataCsv}</div>
    </div>
  )
}

export default ViewChart
