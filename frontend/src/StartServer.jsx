import React, { useEffect } from 'react'

export default function StartServer() {

    //start the API server
    useEffect(() => {
     
     
         async function fetchData() {
            console.log('starting')
            fetch("https://itunedbackend.onrender.com/ping", {
                method: "GET",
              })
                .then((response) => response.json())
                .then((data) => { 
                    console.log( `%c Started`, 'color: Green')
                })
                .catch((error) => {
                    console.log(`%c ${error}`, 'color: Yellow')
                });
         }
         fetchData()
    }, [])
    
}
