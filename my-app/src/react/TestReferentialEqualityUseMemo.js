import React, { useState, useMemo,useEffect } from "react";

function makeObject(a, b, c) {
  return { a, b, c };
}

function doSomething (myObject,a) {
  console.log('doSomething myObject =', myObject);
  console.log('a =', a);
}

// const  TestReferentialEqualityUseMemo = ({ a, b, c })  => {
  // let a =0;
  const  TestReferentialEqualityUseMemo = (props)  => {
    let a = props.value.a;
    let b = props.value.b;
    let c = props.value.c;

    console.log('props=', {props})
  const [count, setCount] = useState(0);
  const myObject = useMemo(() => makeObject(a, b, c), [a, b, c]);

  useEffect(() => {
    doSomething(myObject,a);
  }, [myObject,a]);

  return (
    <>
      Here's the object: {JSON.stringify(myObject)}
      Here's the count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
          a = count;
          props.setState({a:count,b:2,c:3})
          console.log('a button=',a);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default TestReferentialEqualityUseMemo
