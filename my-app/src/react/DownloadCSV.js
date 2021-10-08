import React, { useCallback, useEffect } from 'react'

function DownloadCSV({ OnDataCsv, dataCsv }) {

  let dataCSV = 'Данные Есть';

  // const handleInputChange = useCallback((dataCSV) => {
  //   OnDataCsv(dataCSV)
  // }, [OnDataCsv])

  const updateData = (value) => {
    OnDataCsv(value)
  }
  // useEffect(updateData, [OnDataCsv]);

  return (
    <div>
      {/* <input type="text" onChange={handleInputChange} value={name} />
      <div>The name is: {name}</div> */}
      <button
        // className="btn yellow darken-4"
        className="btn cyan darken-1"
        // onClick={handleInputChange(dataCSV)}
        onClick={updateData(dataCSV)}
      // disabled={loading}
      >setDataCsv
          </button>
    </div>
  )
}

export default DownloadCSV
