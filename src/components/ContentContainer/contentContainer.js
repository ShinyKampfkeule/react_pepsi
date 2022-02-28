import {useNavigate} from "react-router-dom";
import Image from "../image/image";
import arrow from "../../images/right-arrow.png"

export default function ContentContainer({ownClass, text1, text2, textHead, questionHead, nextRoute, image1, image2, final, colorCode}) {
    let navigate = useNavigate();
    function switchRoute() {
        navigate(`../${nextRoute}`);
    }
    if (ownClass === "rightContainer") {
        return (
            <div className={ownClass} onClick={switchRoute}>
                <p className="textButton"><img src={arrow} alt="Pfeil" className="arrowIcon" />{text1} <br /> {text2}</p>
            </div>
        )
    } else if (image2 !== undefined) {
        return (
            <div className={ownClass}>
                <p className="textHeading" style={{color: colorCode}}>{textHead}</p>
                <p className="textQuestion" style={{color: colorCode}}>{text1}</p>
                <p className="textQuestion" style={{color: colorCode}}>{questionHead}</p>
                <Image image={image2} ownClass="wwf" text="WWF-Logo" />
                <p className="textAnswer">{text2}</p>
            </div>
        )
    } else if (image1 !== undefined) {
        return (
            <div className={ownClass}>
                <p className="textHeading" style={{color: colorCode}}>{textHead}</p>
                <p className="textQuestion" style={{color: colorCode}}>{text1}</p>
                <p className="textQuestion" style={{color: colorCode}}>{questionHead}</p>
                <Image image={image1} ownClass="map" text="Karte Deutschland mit Bayern" />
                <p className="textAnswer">{text2}</p>
            </div>
        )
    } else {
        return (
            <div className={ownClass}>
                <p className="textHeading" style={{color: colorCode}}>{textHead}</p>
                <p className="textQuestion" style={{color: colorCode}}>{text1}</p>
                <p className="textQuestion" style={{color: colorCode}}>{questionHead}</p>
                <p className="textAnswer">{text2}</p>
            </div>
        )
    }
}