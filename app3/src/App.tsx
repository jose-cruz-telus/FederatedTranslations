import * as React from 'react';
import LocalButton from './Button';
const TranslationSetter = React.lazy(() => import('Translation/ChangeLang'));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 2</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <TranslationSetter />
    </React.Suspense>
  </div>
);

export default App;
