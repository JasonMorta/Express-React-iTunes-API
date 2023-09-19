import React, { useEffect } from 'react'

export default function StartServer() {

    //start the API server
    useEffect(() => {
     
        console.log('starting')
           fetch("https://itunedbackend.onrender.com/ping", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => { console.log( data)})
            .catch((error) => console.error(error));
       
    }, [])
    
}
