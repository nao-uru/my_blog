import React,{useEffect, useState} from "react";


export const GetDribblePost = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const accessToken = "b767ae1d35d84ad93ba6958ccc548c3cc6c343bce13343f734abc9ab157a2f0d"

  useEffect(() => {
    fetch('https://api.dribbble.com/v2/user/shots?access_token='+accessToken,)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // if(error) {
  //   return <p>ERROR</p>
  // } else if(!isLoaded) {
  //   return <p>LOADING...</p>
  // } else {
  //   return {items}
  // }

  return { items }
}

