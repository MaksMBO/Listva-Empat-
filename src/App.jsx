import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from '@/redux/store';
import PageLoader from './components/PageLoader';

const Landing = lazy(() => import('./pages/Landing'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <Suspense fallback={<PageLoader />}>
          {/* <IdurarOs /> */}
          <Landing />
        </Suspense>
      {/* </Provider> */}
    </BrowserRouter>
  );
}