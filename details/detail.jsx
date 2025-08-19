import react from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsPiggyBank } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import "./detail.css";
let Detail=()=>{
    
    return(
        <div id="detail-section">
            <div id="detail-row1">
                
                <div className="detail-col1">
                    <h2 className="detail-icons"><CiDeliveryTruck /></h2>
                    <p>Free Shipping</p>
                    <p>Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                </div>

                <div className="detail-col2">
                     <h2 className="detail-icons" ><BsPiggyBank /></h2>
                    <p>Money Back Guarantee</p>
                    <p>Nullam gravida felis ac nunc tincidunt, sed malesuada justo pulvinar. Vestibulum nec diam vitae eros.</p>
                </div>
                <div className="detail-col3">
                     <h2 className="detail-icons" ><FiPercent /></h2>
                    <p>Discount Offers</p>
                    <p>Nulla ipsum nisi vel adipiscing amet, dignissim consectetur ornare. Vestibulum quis posuere elit auctor.</p>
                </div>
                <div className="detail-col4">
                     <h2 className="detail-icons" ><BsHeadset/></h2>
                    <p>24/7 Support</p>
                    <p>Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod tempor nunc felis vestibulum ornare.</p>
                </div>
            </div>


        </div>
    )
}
export default Detail;