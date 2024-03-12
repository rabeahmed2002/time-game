import React from 'react'
import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom'

const ResultMOdal = forwardRef(function ResultMOdal({targetTime, remainingTime, onReset}, ref) {

  const dialog=useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime=(remainingTime/1000).toFixed(2);
  const score= math.round(1 - remainingTime/(targetTime*1000)) * 100

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='result-modal'>
      { userLost && <p>You lost</p>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultMOdal
