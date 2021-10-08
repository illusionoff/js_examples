// function Button({ setBackgroundColor }) {
// const Tree = ({ backgroundColor }) => {
const Four = (props) => {
  // console.log('Tree backgroundColor=', backgroundColor);
  console.log('Four module restart');
  // function getRandomArbitrary(min, max) {
  //   return Math.random() * (max - min) + min;
  // }
  return (
    <div >
      {/* <p>Color {backgroundColor}</p> */}
      <p>Name {props.name}</p>
    </div>
  );
}
export default Four
