import React from 'react'
function ActionCard({action, onSeeMore}) {
  return (
    
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
        <span css={{'text-align': 'center'}}>{action.datacenter}/{action.hostname}</span>
        <span css={{'text-align': 'center'}}><b>Last Action:</b> {action.timestamp.toLocaleString ()}</span>
      </header>
      <article css={{
        display: 'grid',
        'align-content': 'center',
        width: '80%',
        'margin-left': '10%'
      }}>
        <p>{action.action}</p>
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
        }} onClick={onSeeMore}>See More</span>
      </footer>
    </div>
  )
}

export default ActionCard
