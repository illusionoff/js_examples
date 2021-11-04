import React, { useState, useMemo, useEffect, useCallback } from "react";

function makeObject(a, b, c) {
  console.log('function makeObject');
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
  // const myObject = useCallback(() => makeObject(a, b, c), [a, b, c]);

  useEffect(() => {
    doSomething(myObject);
  }, [myObject]);

  return (
    <>
      Here's the object: {JSON.stringify(myObject)}
      Here's the count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
          a = count;
          // props.setState({a:count,b:2,c:3})
          props.setState({a:1,b:2,c:3})
          console.log('a button=',a);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          a = count;
          // props.setState({a:count,b:2,c:3})
          props.setState({a:2,b:2,c:2})
          // console.log('a button=',a);
        }}
      >
        Increment2
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          a = count;
          // props.setState({a:count,b:2,c:3})
          props.setState({a:3,b:3,c:3})
          // console.log('a button=',a);
        }}
      >
        Increment3
      </button>
    </>
  );
}

export default TestReferentialEqualityUseMemo
