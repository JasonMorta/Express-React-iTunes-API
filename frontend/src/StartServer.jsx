import React, { useEffect } from 'react'

export default function StartServer() {

    //start the API server
    useEffect(() => {
     
           fetch("https://itunedbackend.onrender.com/health", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => { console.log( data)})
            .catch((error) => console.error(error));
       
    }, [])
    
}
