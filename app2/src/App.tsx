import * as React from 'react';
import LocalButton from './Button';
const TranslationSetter = React.lazy(() => import('Translation/ChangeLang'));

const App = () => (
  <div style={{ background: 'blue' }}>
    <h1>Typescript</h1>
    <h2>App 2</h2>
    <LocalButton />
  </div>
);

export default App;
