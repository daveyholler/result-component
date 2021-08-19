import React from 'react';
import { EuiPanel } from '@elastic/eui';
import { ResultHeader } from './components/result_header';

function App() {
  return (
    <div style={{ width: '60rem', margin: '10rem auto' }}>
      <EuiPanel hasBorder paddingSize="s">
        <ResultHeader
          title="A very well-written title"
          metaData={{
            id: "098DJV02389UJF09I3",
            lastUpdated: "2021-08-31",
            clickCount: 42121,
            engineId: "jnco-jeans"
          }}
        />
      </EuiPanel>
    </div>
  );
}

export default App;
