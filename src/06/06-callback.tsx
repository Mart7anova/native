import React, { FocusEventHandler, MouseEvent } from 'react';

export const User = () => {
  const focusLost = () => {
  }
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
     alert (e.currentTarget.name)
  }
  return (
      <div>
        <button name={'add'} onBlur={focusLost} onClick={onClickHandler}>add</button>
      </div>
  )
}