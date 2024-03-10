import React from 'react'
import {forwardRef} from 'react'

const ResultMOdal = forwardRef(function ResultMOdal({result, targetTime}, ref) {
  return (
    <dialog ref={ref} className='result-modal'>
      <p>You {result}</p>
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>X seconds left</strong></p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultMOdal
