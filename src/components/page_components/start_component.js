import StartVideo from "../../components/Video/startVideo";
import video from '../../videos/StartScreen2Small.mp4';
import Thumb from "../../images/ThumbnailFarm.png";
import ContentContainer from "../../components/ContentContainer/contentContainer";

export default function StartComponent() {
    return(
        <div className="z-Index">
            <StartVideo video={video}/>
            <img src={Thumb} alt="Farm" className="testImage"/>
            <ContentContainer ownClass="rightContainer" text1="WILLKOMMEN" text2="AUF DER PEPSI FARM" nextRoute="PosAgrPre"/>
        </div>
    );
}