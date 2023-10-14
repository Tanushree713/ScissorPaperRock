import React from  'react' ;

function Icon(props){
   

    return (
      <>
        <div className='handemoji'>
          <h1>
            {props.x} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.y}
          </h1>
          <hr />
  
          <h1>Winner is {props.winEmoji === "Draw" ? "No one" : props.winEmoji} </h1>
          <hr />
          <div className='pointbox'>
          <h1>PlayerX Points: {props.pointsX}</h1>
          <h1>PlayerY Points: {props.pointsY}</h1>
          </div>
          
        </div>
      </>
    );
}
export default Icon ;