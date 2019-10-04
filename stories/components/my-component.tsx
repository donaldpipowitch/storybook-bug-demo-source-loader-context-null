import React from 'react';
import { SomeDataProvider, useSomeData } from '../../src/hooks/use-some-data';

export default { title: 'Components|MyComponent' };

const MyComponent = () => {
  const someData = useSomeData();
  return <p>Test</p>;
};

export const Test = () => (
  <SomeDataProvider>
    <MyComponent />
  </SomeDataProvider>
);
