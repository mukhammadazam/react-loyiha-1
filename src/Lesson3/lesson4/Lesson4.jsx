import React from 'react'

const Lesson4 = () => {
  return (
    <div>
        <button onClick={() => handleChangeLaguage('eng')}>Eng</button>
      <button onClick={() => handleChangeLaguage('ru')}>Ru</button>
      <h1>
        {
          t("text")
        }

      </h1>
    </div>
  )
}

export default Lesson4