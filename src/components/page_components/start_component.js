import StartVideo from "../../components/Video/startVideo";
import video from '../../videos/StartScreen2Small.mp4';
import Thumb from "../../images/ThumbFarm.png";
import ContentContainer from "../../components/ContentContainer/contentContainer";

export default function StartComponent() {
    return(
        <div className="maxSize">
            <StartVideo video={video}/>
            <img src={Thumb} alt="Farm" className="ThumbImage"/>
            <ContentContainer ownClass="rightContainer" text1="WILLKOMMEN" text2="AUF DER PEPSI FARM" nextRoute="PosAgrPre"/>
        </div>
    );
}