import "./navbar.scss";

// img
import Img from "../../img/nav-re.png";

// icon
import InstagramIcon from '@mui/icons-material/Instagram';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListIcon from '@mui/icons-material/List';
import PhoneIcon from '@mui/icons-material/Phone';

function Navbar(){
    return(
    <nav className="navbar">
        <div className="container flexbox">
            
            <ul className="navbar__list flexbox">
                <li>
                    <a href="/">REVIEWS</a>
                </li>
                <li>
                    <a href="/">SHIPPING AND PAYMENT</a>
                </li>
                <li>
                    <a href="/">WHOLESALE</a>
                </li>
                <li>
                    <a href="/">BLOG</a>
                </li>
                <li>
                    <a href="/">CONTACTS</a>
                </li>
            </ul>
            
            <ListIcon className="navbar__toogle" />
             <img className="navbar__img" src={Img} alt="" />
            <ul className="navbar__right-list ">
            <li className="navbar__right-item">
                        <PhoneIcon  />
                </li>
                <li>
                <AddShoppingCartIcon className="navbar__shop" />
                <span className="navbar__after">1</span>
                </li>
                <li>
                <InstagramIcon  className="navbar__instagram"/>
                </li>
                <li>
                    <a className="navbar__tel" href="tel:+998930026613">+998930026613</a>
                </li>
               
            </ul>

        </div>
    </nav>
    )
}
export default Navbar