import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/ICrop.mp4";
import Thumb from "../../images/ThumbICropNew.png"

export default function ICropComponent({state}) {
    if (state === "pre") {
        return(
            <div className="maxSize">
                <img src={Thumb} alt="iCrop" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="iCrop" questionHead="Doch wie kann man das überhaupt messen?" text1="PepsiCo’s Bestrebungen in der Agrarkultur helfen Landwirtschaftsbetrieben unter Anderem dabei, eine positive Wasserbilanz zu ermöglichen und Ressourcen-Verschwendung zu vermeiden." colorCode="#26400D" />
                <ContentContainer ownClass="rightContainer" text1="BEWÄSSERN" text2="WIR DAS FELD" nextRoute="ICrop"/>
            </div>
        );
    } else {
        return(
            <div className="maxSize">
                <Video video={video}/>
                <img src={Thumb} alt="iCrop" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="iCrop" questionHead="Doch wie kann man das überhaupt messen?" text1="PepsiCo’s Bestrebungen in der Agrarkultur helfen Landwirtschaftsbetrieben unter Anderem dabei, eine positive Wasserbilanz zu ermöglichen und Ressourcen-Verschwendung zu vermeiden." text2="Die Technologie von iCrop hilft den Kartoffelfarmen von PepsiCo dabei, die landwirtschaftlichen Praktiken in einer Vielzahl von Bereichen zu verbessern, einschließlich der nachhaltigen Wasserwirtschaft. Das Tool hilft bei der Bewässerungsplanung, um sicherzustellen, dass das Wasser so effizient wie möglich genutzt wird." colorCode="#26400D" />
                <ContentContainer ownClass="rightContainer" text1="NÄCHSTER" text2="SCHRITT" nextRoute="ErntenPre"/>
            </div>
        );
    }
}