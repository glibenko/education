import React from 'react'

function Window({ message, name }) {

  return (
    <div style={{ border: '1px solid #ccc', height: 300 }}>
      <ol className="item-list">
        {message.map((el) => {
          const style = el.name === name ? { color: 'green' } : { color: 'blue' };
          return <li key={el.id} style={style}>{el.name}: {el.message}</li>
        })}
      </ol>
    </div>
  )
}

export default Window
