// import React from "react";
// import "./Nav.css";
// import {useRef} from "react";


// function Nav(){

//     const aboutMe =useRef(null);
//     const skills =useRef(null);
//     const projects =useRef(null);
//     const resume =useRef(null);
//     const contact =useRef(null);

//     // const scrollToSection = (elementRef) =>{
//     //     window.scrollTo({
//     //         top:elementRef.current.offsetTop,
//     //         behavior:"smooth",
//     //     });
//     // }

//     return (
//         <div className="navbar">
//             <div className="name">
//                 <svg height="30%" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">         
//                     <path d="M0 3H15V7.5V12H0V3Z" fill="white"/>
//                     <path d="M1.84 10.404L4.528 7.692L1.84 4.992H3.772L6.46 7.692L3.772 10.404H1.84Z" fill="black"/>
//                     <path className="underline"d="M7.648 10.168V8.884H12.676V10.168H7.648Z" fill="black"/>
//                 </svg>
//                 <a href = "#"><span>DEV</span><span className="decor">/SIGN</span></a>
//             </div>
//             <div className="labels">
//                 <div className="label" onClick={()=>scrollToSection(aboutMe)}><a href="#">About</a></div>
//                 <div className="label" onClick={()=>scrollToSection(skills)}><a href="#">Skills</a></div>
//                 <div className="label"><a href="#">Projects</a></div>
//                 <div className="label"><a href="#">Resume</a></div>
//                 <div className="label"><a href="#">Contact</a></div>
//             </div>
//         </div>
//     )
// }

// export default Nav;