import { useState } from "react";


export default function LikeButton(){
   let [isLiked,setIsLiked]=useState(false);
   let toggleLike=()=>{
      setIsLiked(!isLiked);
   }


    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ?(
                    <i className="fa-solid fa-heart"></i>
                ):(
                    <i className="fa-regular fa-heart"></i>

                )}
            </p>
          
        </div>
    );
}