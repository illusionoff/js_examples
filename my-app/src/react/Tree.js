// function Button({ setBackgroundColor }) {
// const Tree = ({ backgroundColor }) => {
const Tree = () => {
  // console.log('Tree backgroundColor=', backgroundColor);
  console.log('Tree module restart');
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  return (
    <div >
      {/* <p>Color {backgroundColor}</p> */}
      <p>Color {getRandomArbitrary(0, 100)}</p>
    </div>
  );
}
export default Tree
