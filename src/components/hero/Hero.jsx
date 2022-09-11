import "./hero.scss"

// img
import img from "../../img/hero-img.png";
import profile from "../../img/hero-profile.png";

function Hero(){
    return(
        <div className="hero">
            <div className="container">
             <ul className="hero__list flexbox">
                <li className="hero__item ">
                    <img src={img} alt="logo" />
                    <span>
                    <h2>SEGWAY</h2>
                    <h3>CALIFORNIA</h3>
                    </span>
                </li>
                <li className="hero__item ">
                    <img src={profile} alt="logo" />
                    <span>
                        <h5>jOHN SMITH</h5>
                        <p>Ask a question </p>
                        <p>to the director</p>
                    </span>
                </li>
             </ul>
            </div>
        </div>
    )
}

export default Hero;