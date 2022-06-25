import React from 'react'
// the DeleteItem will be placed inside the ModalTable component.
//Clicking this icon will delete the current item from the table list.


export default function DeleteItem(props) {
  return (
   
      <div onClick={props.deleteTrack}>
      <   svg 
         xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.7 20.5Q6.775 20.5 6.163 19.887Q5.55 19.275 5.55 18.35V5.9H4.55V4.55H8.95V3.65H15.1V4.55H19.5V5.9H18.5V18.35Q18.5 19.275 17.888 19.887Q17.275 20.5 16.35 20.5ZM9.525 17.125H10.875V7.925H9.525ZM13.175 17.125H14.525V7.925H13.175Z"/></svg>
      </div>
    
  )
}
