import "./header.scss";

import SegWay from "../../SegWayPic.js";

function Header(){
    return(
        <header className="header">
           
            
                <div className="header__topbar">
                   <div className="container">
                   <ul className="header__topbar__list">
                        {SegWay.map((element)=>{
                            return(
                                <li key={element.id}>
                                    <img src={element.img} alt="" />
                                    <h2>{element.title}</h2>
                                </li>
                            )
                        })}
                    </ul>
                   
                   </div>
                   <div className="header__topbar__box">
                        <h2>Free 1 day shipping within California.</h2>
                    </div>
                </div>
            
         
        </header>
    )
}

export default Header;