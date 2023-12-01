import {useEffect, useState} from "react";

const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: {
      is: false,
      message: null
    },
  })

  const setError = (message) => {
    setState({
      ...state,
      hasError: {
        is: true,
        message
      }
    })
  }

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const response = await fetch(url);

    if(!response.ok) {
      setError("Hubo un error");
      return;
    }

    const data = await response.json();

    setState({
      data,
      isLoading: false,
      hasError: {
        is: false,
        message: null
      },
    })
  }

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state
}
}

export default useFetch;