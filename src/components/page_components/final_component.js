import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/EndScreenRAW.mp4";
import Thumb from "../../images/ThumbFinal.png";
import {useNavigate} from "react-router-dom";
import {Redirect} from "react-router";
import {useEffect, useState} from "react"

export default function FinalFinalComponent({state}) {
    const [time, setTime] = useState(20)
    useEffect(() => {
        if (state !== "pre") {
            setTimeout(countdown, 1000)
        }
    })
    const countdown = () => {
        setTime(time-1)
        if (time <= 0) {
            navigate("/NewStart")
        }
    }
    let navigate = useNavigate()
    if (state === "pre") {
        return(
            <div className="z-Index">
                <img src={Thumb} alt="Farm" className="ThumbImage"/>
                <ContentContainer ownClass="rightContainer" text1="VIELEN DANK" text2="ERNEUT STARTEN" nextRoute="NewStart" final={true} />
            </div>
        );
    } else {
        return (
            <div className="z-Index">
                <p className="textHeadingFinal">Vielen Dank für deine Hilfe</p>
                <Video video={video}/>
                <img src={Thumb} alt="Farm" className="ThumbImage"/>
                <ContentContainer ownClass="rightContainer" text1="VIELEN DANK" text2="ERNEUT STARTEN" nextRoute="NewStart" final={true} />
            </div>
        )
    }
}