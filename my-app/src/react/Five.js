// function Button({ setBackgroundColor }) {
const Five = () => {
  let cound = 0;

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  console.log('Five module restart');
  return (
    // <div onClick={() => { setBackgroundColor(resultColor) }}>
    <div onClick={() => {
      console.log(`click ${cound++}`)
    }}>
      <p>Five.js Click me to change!</p>
    </div>
  );
}
export default Five
