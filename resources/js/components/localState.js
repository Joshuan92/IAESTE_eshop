import {useState} from 'react'

const useLocalState = (localItem) => {
  const [localState, setLocalState ] = useState(localStorage.getItem(localItem));

  const setLoc = (newItem) => {
    localStorage.setItem(localItem, newItem);
    setLocalState(newItem);
  }

  return [localState, setLoc]
}

export default useLocalState 