import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/WWFSmall.mp4";
import logo from "../../images/800px-WWF_Logo.svg.png"
import Thumb from "../../images/ThumbSchluss.png"

export default function FinalComponent({state}) {
    if (state === "pre") {
        return(
            <div className="maxSize">
                <img src={Thumb} alt="iCrop" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="Zusammenarbeit mit dem WWF" questionHead="Wie sieht das genau aus?" text1="PepsiCo setzt sich für die Etablierung branchenweiter Standards und Messungen für regenerative Landwirtschaft ein." colorCode="#34412E" />
                <ContentContainer ownClass="rightContainer" text1="LASS UNS" text2="VORREITER SEIN" nextRoute="Schluss"/>
            </div>
        );
    } else {
        return(
            <div className="maxSize">
                <Video video={video}/>
                <img src={Thumb} alt="iCrop" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="Zusammenarbeit mit dem WWF" questionHead="Wie sieht das genau aus?" text1="PepsiCo setzt sich für die Etablierung branchenweiter Standards und Messungen für regenerative Landwirtschaft ein." text2="Gemeinsam mit führenden Organisationen wie dem World Wildlife Fund (WWF) entwickelt PepsiCo eine Methode, um wissenschaftlich fundierte Ziele für das Wasser festzulegen. Diese sollen die Vorteile regenerativer und widerstandsfähiger Anbausysteme und –praktiken für die Wasserqualität und –menge berücksichtigen."  image2={logo} colorCode="#34412E" />
                <ContentContainer ownClass="rightContainer" text1="BEENDE DEIN" text2="PEPSICO ERLEBNIS" nextRoute="Final"/>
            </div>
        );
    }
}