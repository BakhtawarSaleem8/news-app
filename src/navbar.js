// import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
//    const [active,setActive]=useState(false)
return(
    <>
    <div className="nav-bar">
        <ul>
        <li ><Link to='/'  style={{textDecoration:'none',color:'white'}}> Articles by Wall street journal</Link></li>
            <li><Link to='/apple' style={{textDecoration:'none',color:'white'}}>Apple</Link></li>
            <li><Link to='/business' style={{textDecoration:'none',color:'white'}}>Business</Link></li>
            <li><Link to='/tesla' style={{textDecoration:'none',color:'white'}}>Tesla</Link></li>
            <li><Link to='/techcrunch' style={{textDecoration:'none',color:'white'}}>Techcrunch</Link></li>
        </ul>
    </div>
    </>
)
}
export default Navbar;