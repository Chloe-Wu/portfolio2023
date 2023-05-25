import React from 'react';
import { useEffect,useState } from 'react';
import { TbArrowTopCircle } from "react-icons/tb";

function ScrollButton(){
  const [ScrollButton,setScrollButton] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >100){
        setScrollButton(true);
      }else{
        setScrollButton(false)
      }
    })
  },[])

  const scrollUp=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  };

  return(
    <div>
      {ScrollButton && (
        <button style={{
          position:"fixed",
          width:"50px",
          height:"50px",
          bottom:"50px",
          right:"50px",
          fontSize:"50px",
          borderRadius:"50px",
          backgroundColor:"var(--main-black-color)",
          border:"0.5px solid var(--main-white-color)",
          color:"var(--main-white-color)",
          padding:"auto"

        }}onClick={scrollUp}>
                          <TbArrowTopCircle size={30} color="white"/>
          </button>
      )}
    </div>

  );
}
  
export default ScrollButton;