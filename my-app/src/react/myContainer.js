// import React, { useState } from 'react'
// import DownloadCSV from './DownloadCSV'
// import ViewChart from './ViewChart'

// function MyContainer() {
//   const [dataCsv, setDataCsv] = useState('Данных еще нет');

//   // const updateData = (value) => {
//   //   setDataCsv({ data: value })
//   // }

//   return (
//     <>
//       {/* <DownloadCSV OnDataCsv={setDataCsv} dataCsv={dataCsv}/>
//       <ViewChart dataCsv={dataCsv} /> */}
//     </>
//   )
// }

import React, { useState } from "react";
import Button from './Button';
import Tree from './Tree'
import Four from './Four'

const MyContainer = () => {
  const [backgroundColor, setBackgroundColor] = useState('red');
  console.log('MyContainer backgroundColor=', backgroundColor);
  console.log('MyContainer module restart');

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }}>
        <Button setBackgroundColor={setBackgroundColor} backgroundColor={backgroundColor} />
      </div>
      <div>
        {/* <Tree backgroundColor={backgroundColor} /> */}
        <Tree />
        <Four name='Александр' />
      </div>
    </>
  );
}

// const Button = ({ setBackgroundColor }) => {
//   return (
//     <div onClick={() => { setBackgroundColor('blue') }}>
//       <p>Click me to change the color!</p>
//     </div>
//   );
// }

export default MyContainer
