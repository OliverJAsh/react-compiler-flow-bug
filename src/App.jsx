import React from 'react';

const flow = (a, b) => (x) => b(a(x));
const composeRefs = (b) => b;

const WithFlow = () => {
  const [, setState] = React.useState(null);
  // ❌
  const myRef = flow((x) => [x], setState);

  React.useEffect(() => {}, []);

  return <div ref={composeRefs(myRef)} />;
};

const WithoutFlow = () => {
  const [, setState] = React.useState(null);
  // ✅
  const myRef = (x) => {
    setState([x]);
  };

  React.useEffect(() => {}, []);

  return <div ref={composeRefs(myRef)} />;
};

const App = () => (
  // ❌
  <WithFlow />

  // ✅
  // <WithoutFlow />
)

export default App;
