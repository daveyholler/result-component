import React from 'react';
import { Result } from './components/result';
import { EuiSpacer } from '@elastic/eui';

const log = () => {
  console.log('You clicked')
}

const actions = [
  {
    label: 'Score: 4.15',
    iconType: 'visGauge',
    color: 'success'
  }, {
    label: '108 Clicks',
    iconType: 'plus',
    color: 'primary',
    onClick: log
  }
]

const moreActions = [
  {
    label: 'Promote',
    iconType: 'menuUp',
    color: 'primary',
    onClick: log
  },
]

const stillMoreActions = [
  {
    label: 'Demote',
    iconType: 'menuDown',
    color: 'danger',
    onClick: log
  },
]

const fields = [
  {
    iconType: 'tokenString',
    fieldName: 'title',
    fieldValue: 'The most intriguing title you\'ve ever read'
  }, {
    iconType: 'tokenNumber',
    fieldName: 'year',
    fieldValue: '2021'
  }, {
    iconType: 'tokenGeo',
    fieldName: 'location',
    fieldValue: '42.108, 23.516'
  }, {
    iconType: 'tokenDate',
    fieldName: 'published_at',
    fieldValue: '2021-06-22'
  }, {
    iconType: 'tokenString',
    fieldName: 'url',
    fieldValue: 'https://yoursite.com/your-favorite-slug'
  }, {
    iconType: 'tokenDate',
    fieldName: 'published_at',
    fieldValue: '2021-06-22'
  }, {
    iconType: 'tokenGeo',
    fieldName: 'location',
    fieldValue: '42.108, 23.516'
  }
]

function App() {
  return (
    <div className="app">
      <Result
        actions={actions}
        fields={fields}
        isDraggable
        metaData={{
          id: "098DJV02389UJF09I3",
          lastUpdated: "2021-08-31",
          clickCount: 42121,
          engineId: "jnco-jeans"
        }}
      />
      <EuiSpacer />
      <Result
        actions={moreActions}
        fields={fields}
        isCheckable
        metaData={{
          id: "098DJV02389UJF09I3",
          lastUpdated: "2021-08-31",
          clickCount: 42121,
          engineId: "jnco-jeans"
        }}
      />
      <EuiSpacer />
      <Result
        actions={stillMoreActions}
        fields={fields}
        metaData={{
          id: "098DJV02389UJF09I3",
          lastUpdated: "2021-08-31",
          clickCount: 42121,
          engineId: "jnco-jeans"
        }}
      />
      <EuiSpacer />
      <Result
        actions={actions}
        fields={fields}
        isCheckable
        isDraggable
        metaData={{
          id: "098DJV02389UJF09I3",
          lastUpdated: "2021-08-31",
          clickCount: 42121,
          engineId: "jnco-jeans"
        }}
      />
    </div>
  );
}

export default App;
