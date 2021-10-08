// function Button({ setBackgroundColor }) {
const Button = ({ setBackgroundColor, backgroundColor }) => {
  console.log('Button backgroundColor=', backgroundColor);
  console.log('Button module restart');
  let resultColor = backgroundColor;
  if (backgroundColor === 'red') { resultColor = 'blue' }
  else { resultColor = 'red' }

  return (
    <div onClick={() => { setBackgroundColor(resultColor) }}>
      <p>Click me to change the color!</p>
    </div>
  );
}
export default Button
