// let ws = 'websocket';
let timerClosure = function (timerConfigObj) {
  // {period: 1000,funStart:funStart,funEnd:funEnd}
  let period = timerConfigObj.period;
  let funStart = timerConfigObj.funStart || function () { console.log('null function funStart') };
  let funEnd = timerConfigObj.funEnd || function () { console.log('null function funEnd') };

  // funStartArguments

  let id;
  function start() {
    clearInterval(id);
    id = setInterval(function () {
      // ws.send(JSON.stringify({ "cmd": "ping" }));
      // let timeNaw = new Date().getTime();
      // console.log('time ping bith start ======================================', timeNaw);
      console.log('timerConfigObj.funStartArguments=', timerConfigObj.funStartArguments);
      funStart(...timerConfigObj.funStartArguments);
    }, period);
  }

  function stop() {
    clearInterval(id);
    // let timeNaw = new Date().getTime();
    // console.log('stopPing');
    // console.log('time pong bith stop ======================================', timeNaw);
    funEnd(...timerConfigObj.funEndArguments);
  }

  return { start, stop }
};

let funStartPing = (one, two) => {
  let timeNaw = new Date().getTime();
  console.log('This  Ping start timeNaw 2=', timeNaw);
  // ws.send(JSON.stringify({ "cmd": "ping" }));
  console.log('one=', one);
  console.log('two=', two);
  // process.exit();
};

let funEndPing = (tree) => {
  let timeNaw = new Date().getTime();
  console.log('This funEnd timeNaw=', timeNaw);
  console.log('tree=', tree);

};

module.exports = { timerClosure, funStartPing, funEndPing }
