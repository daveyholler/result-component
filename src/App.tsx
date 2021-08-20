import React, { useState } from 'react';
import { EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiToolTip } from '@elastic/eui';
import { ResultHeader } from './components/result_header';
import { ResultFields } from './components/result_fields';

const actions = [
  {
    label: 'Score: 4.15',
    iconType: 'visGauge',
    color: 'success'
  }, {
    label: '108 Clicks',
    iconType: 'plus',
    color: 'default'
  }
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div style={{ width: '60rem', margin: '10rem auto' }}>
      <EuiPanel hasBorder paddingSize="s">
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem>
            <EuiFlexGroup direction="column" gutterSize="s">
              <EuiFlexItem grow={false}>
                <ResultHeader
                  title="A very well-written title"
                  actions={actions}
                  metaData={{
                    id: "098DJV02389UJF09I3",
                    lastUpdated: "2021-08-31",
                    clickCount: 42121,
                    engineId: "jnco-jeans"
                  }}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <ResultFields fields={isExpanded ? fields : fields.slice(0, 3)} />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <div className="resultExpandCollapse">
              <EuiToolTip content={`Show ${fields.length - 3} ${isExpanded ? 'fewer' : 'more'} fields`}>
                <EuiButtonIcon
                  iconType={isExpanded ? 'fold' : 'unfold'}
                  color="subdued"
                  onClick={() => setIsExpanded(!isExpanded)}/>
              </EuiToolTip>
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </div>
  );
}

export default App;
