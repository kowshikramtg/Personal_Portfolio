// impport react from 'react';
import './PersoImg.css'
import Img1 from '../../assets/I1.jpg';
import Img2 from '../../assets/I2.jpg';
import Img3 from '../../assets/I3.jpg';
import Img4 from '../../assets/I4.jpg';
function PersoImg() {
    return (
        <>
        <div className="myImgs">
            <img src={Img1} alt="img1" className="images"/>
            <img src={Img2} alt="img2" className="images"/>
            <img src={Img3} alt="img3" className="images"/>
            {/* <img src={Img4} alt="img4" className="images"/> */}
          </div>
        </>
    )
}
export default PersoImg;