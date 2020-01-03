import React, {useState} from 'react'
import {jsx} from 'emotion';

function FilterGroup({dataset, property, onSelect}) {
  const options = dataset.reduce ((acc, val) => {
    return acc.includes (val [property]) ? acc : [...acc, val [property]];
  }, []);
  const [selected, setSelected] = useState (null);
  if (!!selected) return (
    <ul css={{
      'list-style-type': 'none'
    }}>
      <li css={{
        overflow: 'hidden',
        margin: '15px 0 15px 5px',
        transition: '0.3s',
        height: '16px',
        '&.hide': {
          height: '0',
          margin: '0 0 0 5px'
        },
        '&::before': {
          content: '""',
          display: 'inline-block',
          'margin-right': '25px',
          width: '8px',
          height: '8px',
          background: '#ffffff',
          border: '1px solid black',
          background: '#333'
        }
      }} onClick={() => {setSelected (null); onSelect (null)}} className="selected">{selected}</li>
    </ul>
  )
  return (
    <ul css={{
      'list-style-type': 'none'
    }}>
      {
        options.map (opt => (
          <li css={{
            overflow: 'hidden',
            margin: '15px 0 15px 5px',
            transition: '0.3s',
            height: '16px',
            '&.hide': {
              height: '0',
              margin: '0 0 0 5px'
            },
            '&::before': {
              content: '""',
              display: 'inline-block',
              'margin-right': '25px',
              width: '8px',
              height: '8px',
              background: '#ffffff',
              border: '1px solid black'
            }
          }} onClick={() => {setSelected (opt); onSelect (opt)}}>
            {opt}
          </li>
        ))
      }
    </ul>
  )
}

export default FilterGroup
