/* eslint-disable array-callback-return */
import React from 'react'


//The FavIcon will pe placed inside all the other tabs components
//The FavIcon can be toggled to outlined or filled
//selecting this icon will add item to favorites

export default function FavIcon(props) {

  //Setting the setState to "true" will show the red-heart icon when clicked.
  //The method that keeps the icon red/filled is determined by props.changeHeart in sibling component
  const [state, setState] = React.useState(props.changeHeart)

  function addToFav(){
    setState(true)//fill hear icon with red
    return props.addToFavoritesArray()//This function adds the current item to the favoritesArray(FavoritesModal component)
  }


//switch between outlined(default) and filled heart icon-svg if condition is met.
  let isFavoriteIcon = state ? 
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20.15 11 19.25Q7.275 15.7 4.888 13.175Q2.5 10.65 2.5 7.95Q2.5 5.875 3.938 4.462Q5.375 3.05 7.45 3.05Q8.625 3.05 9.812 3.637Q11 4.225 12 5.6Q13 4.225 14.188 3.637Q15.375 3.05 16.55 3.05Q18.625 3.05 20.062 4.462Q21.5 5.875 21.5 7.95Q21.5 10.65 19.113 13.175Q16.725 15.7 13 19.25Z" fill="red"/></svg>
  :
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="M12 20.15 11 19.25Q7.275 15.7 4.888 13.175Q2.5 10.65 2.5 7.95Q2.5 5.875 3.938 4.462Q5.375 3.05 7.45 3.05Q8.625 3.05 9.812 3.637Q11 4.225 12 5.6Q13 4.225 14.188 3.637Q15.375 3.05 16.55 3.05Q18.625 3.05 20.062 4.462Q21.5 5.875 21.5 7.95Q21.5 10.65 19.113 13.175Q16.725 15.7 13 19.25ZM12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35Q12 11.35 12 11.35ZM12 18.3Q15.625 15.025 17.888 12.625Q20.15 10.225 20.15 7.95Q20.15 6.4 19.125 5.4Q18.1 4.4 16.55 4.4Q15.375 4.4 14.363 5.075Q13.35 5.75 12.65 7.05H11.35Q10.65 5.75 9.637 5.075Q8.625 4.4 7.45 4.4Q5.9 4.4 4.875 5.4Q3.85 6.4 3.85 7.95Q3.85 10.225 6.112 12.625Q8.375 15.025 12 18.3Z"/></svg>


  return (
    <div onClick={addToFav}>
      {isFavoriteIcon}
    </div>
  )
}
