import React, { Suspense } from 'react';

import Loading from '../components/Loading';

const withSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
