import React, {useState, useEffect} from 'react'
import FilterGroup from './FilterGroup'
import ActionCard from './ActionCard'
import {jsx} from '@emotion/core'

function Dash({actions}) {
  const [filteredActions, setFilteredActions] = useState (actions);
  const [datacenterFilter, setDatacenterFilter] = useState (false);
  const [hostnameFilter, setHostnameFilter] = useState (false);
  useEffect (() => {
    if (!datacenterFilter && !hostnameFilter) return setFilteredActions (actions);
    let fa = actions;
    if (hostnameFilter) {
      fa = fa.filter ( action => {
        return action.hostname === hostnameFilter;
      });
    }
    if (datacenterFilter) {
      fa = fa.filter ( action => {
        return action.datacenter === datacenterFilter;
      });
    }
    setFilteredActions (fa);
  }, [datacenterFilter, hostnameFilter]);
  return (
    <div css={{
      display: 'grid',
      'justify-items': 'center',
      'grid-template-columns': '1fr 1fr'
    }}>
      <div css={{
        display: 'none',
        'grid-column': '1 / 3',
        width: '100vw',
        height: '64px',
        'line-height': '64px',
        background: 'rgb(0, 162, 255, 0.5)',
        'box-shadow': '1px 2px 3px rgb(111, 174, 226, 0.5)'
      }}>
        <span>Search: <input name="search" /></span>
      </div>
      <div className="filters">
        <h2>Datacenters:</h2>
        <FilterGroup dataset={actions} property="datacenter" onSelect={selected => {setDatacenterFilter (selected)}} />
        <h2>Hostnames:</h2>
        <FilterGroup dataset={actions} property="hostname" onSelect={selected => {setHostnameFilter (selected)}} />
      </div>
      <div>
        <div css={{
          width: '600px',
          height: '250px',
          display: 'grid',
          'grid-template-rows': '1fr 3fr 1fr',
          'background-color': '#fff',
          'margin-top': '40px',
          border: '1px solid lightblue',
          'box-shadow': '1px 2px 3px rgb(173, 228, 230)'
        }}>
          <header css={{
            display: 'grid',
            'border-bottom': '1px solid rgb(173, 209, 230)',
            'grid-template-columns': '1fr 1fr',
            'line-height': '50px',
            'vertical-align': 'middle'
          }}>
            <span css={{'text-align': 'center'}}><b>Add a Note</b></span>
            <span css={{'text-align': 'center'}}>
              {
                !!datacenterFilter &&
                <span>{datacenterFilter}</span>
              }
              {
                !datacenterFilter &&
                <input name="datacenter" placeholder="datacenter"/>
              }
              /
              {
                !!hostnameFilter &&
                <span>{hostnameFilter}</span>
              }
              {
                !hostnameFilter &&
                <input name="hostname" placeholder="hostname" />
              }
            </span>
          </header>
          <article css={{
            display: 'grid',
            'align-content': 'center',
            width: '80%',
            'margin-left': '10%'
          }}>
            <textarea css={{
              height: '125px',
              border: '1px solid #cccccc55',
              outline: '0',
              resize: 'none'
            }} />
          </article>
          <footer css={{
            display: 'grid',
            'border-top': '1px solid rgb(173, 209, 230)',
            'grid-template-columns': '1fr 1fr 1fr',
            'line-height': '50px',
            'vertical-align': 'middle'
          }}>
            <span css={{
              'text-align': 'center',
              background: '#cccccc00',
              'letter-spacing': '1px',
              '&:hover': {
                'background-color': '#cccccc55'
              }
            }}>Publish</span>
          </footer>
        </div>
        {
          filteredActions.slice (0, 12).map (action => <ActionCard action={action} />)
        }
      </div>
    </div>
  );
}

export default Dash