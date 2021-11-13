import React from 'react'
import { useContext } from './hooks/context'
import { ActionType } from './hooks/reducer'
import DisplayMessage from './DisplayMessage'
import KomponenBaru from './KomponenBaru'

function Input() {
  const [, dispatch] = useContext()
  return (
    <div >
      <header >
        <input
          type="text"
          onChange={(e) => dispatch({ type: ActionType.SET_ERRORMSG, data: { errorMsg: e.target.value } })}
        />
        <br /><br />
        <KomponenBaru />
        <br /><br />
        <DisplayMessage />
      </header>
    </div>
  );
}

export default Input;
