import * as React from 'react';
import { useTranslation } from 'react-i18next';
const RemoteButton = React.lazy(() => import('app2/App'));
const App3 = React.lazy(() => import('app3/App'));
const TranslationSetter = React.lazy(() => import('Translation/ChangeLang'));
const TT = React.lazy(() => import('Translation/Text'));

const App = () => {
  const { t } = useTranslation();
  const [loadedMfe, setLoadedMfe] = React.useState(null as (null | string));

  const renderMfe = () => {
    switch(loadedMfe) {
      case 'APP2':
        return <RemoteButton />
      case 'APP3':
        return <App3 />
      default:
        return <TT as="div" textKey="noMFE"/>
    }
  }

  return (
    <div>
      <React.Suspense fallback="Loading Button">
		    <TT as="h2" textKey="App1" />
		    <TT as="h4" textKey="hw" />
        <TranslationSetter />
        <br />
      </React.Suspense>
      <button onClick={() => setLoadedMfe('APP2')}>APP2</button>
      <button onClick={() => setLoadedMfe('APP3')}>APP3</button>
      <br />
      <br />
      <br />
      <React.Suspense fallback="Loading Button">
        {renderMfe()}
      </React.Suspense>
    </div>
  );
};

export default App;
