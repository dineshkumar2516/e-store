import react,{components} from "react";
import "./header.css";
import { FaPhone } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import "./header.js";
let Head=()=>{

    return(
        <div id="header-section">
                <div id="head-row1">
                   <div className="head1-column1">
                        <p><FaPhone/>Need help? Call us:<a href="#" id="number">+1 (234) 567-890</a></p>
                        </div>
                        <div className="head1-column2">
                            <p>🎁 20% off on your first order</p>
                        </div>
                        <div className="head1-column3">
                            <div className="head1-button1">
                                <button className="button_lang"><FaLanguage/> EN <FaCaretDown /></button>
                            </div>
                            <div className="head1-button2">
                                 <button className="button_cash">$ USD <FaCaretDown/></button>
                            </div>
                           
                           
                        </div>

                </div>
                <div id="head-row2">
                  <div id="head2-col1">
                    <h2>eStore</h2>


                    <div id="head-input">
                        <div id="input-border">
                            <input type="text" placeholder="Search for products" id="head-input1"></input>
                            <button id="input-button"><BsSearch /></button>
                         </div>
                    </div>

                    <div id="head-icons">
                        <div id="head-icons1">
                        <a href="#" style={{color:"black"}} ><IoPersonOutline /></a>
                    </div>
                    
                    <div id="head-icons2">
                            
                        <a href="#" style={{color:"black"}}id="num1" ><CiHeart /></a>
                        <div id="head-num1"><span >0</span></div>
                         </div>
                        
                        <div id="head-icons2">
                            <a href="#" style={{color:"black"}} ><IoCartOutline /></a>
                            <span id="head-num2">3</span>
                        </div>
                        </div>
                        
                    
                    
                  </div>
                 
                </div>
                    <div id="head-row3">
                            <div id="head3-col1">
                                    <ul id="drop-downlist1">
                                        <li id="l1">Home</li>
                                        <li>About</li>
                                        <li>Category</li>
                                        <li>Product details</li>
                                        <li>Cart</li>
                                        <li>Checkout</li>
                                        <li id="dropdown">Dropdown
                                            <ul id="dropdown1">
                                                <li>Dropdown 1</li>
                                                <li>Deep Dropdown
                                                                    <ul id="dropdown2">
                                                                        <li>Deep Dropdown1</li>
                                                                        <li>Deep Dropdown2</li>
                                                                        <li>Deep Dorpdown3</li>
                                                                        <li>Deep Dropdown4</li>
                                                                        <li>Deep DropDown5</li>
                                                                    </ul>

                                                </li>
                                                <li>Dropdown 2</li>
                                                <li>Dropdown 3</li>
                                                <li>Dropdown 4</li>
                                            </ul>

                                        </li>
                                        <li>Megamenu</li>
                                        <li>Megamenu2</li>
                                        <li>Contact</li>
                                    </ul>
                            </div>
                 </div>
            </div>

    )
}
export default Head;