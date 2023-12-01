import {useState} from "react";

const useCounter = (initialValue = 0) => {

  if(initialValue > 1292) initialValue = 1291;
  if(initialValue < 0) initialValue = 0;

  const [counter, setCounter] = useState(initialValue);

  const addValue = (value = 1) => {
    if (value > 1292) value = 1291
    setCounter(counter + value)
  }

  const subValue = (value = 1) => {
    if (counter <= 0) value = 0;
    setCounter(counter - value);
  }

  const resetValue = (value = 0) => {
    setCounter(value);
  }


  return {
    counter,
    addValue,
    subValue,
    resetValue
}
}

export default useCounter;