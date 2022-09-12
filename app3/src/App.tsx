import * as React from 'react';
const TT = React.lazy(() => import('Translation/Text'));

const App = () => (
  <div style={{ background: 'red' }}>
    <h2>App 3</h2>
    <br />
    <br />
    <br />
    <br />

    <React.Suspense fallback="Loading Button">
      <TT as="h2" textKey="App3Sub" />
    </React.Suspense>
  </div>
);

export default App;
