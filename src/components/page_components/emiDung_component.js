import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/pexels-júlio-frendes-10744336.mp4"
import Thumb from "../../images/ThumbEmiDung.png"

export default function EmiDungComponent({state}) {
    if (state === "pre") {
        return (
            <div className="z-Index">
                <img src={Thumb} alt="Emissionsfreie Düngung" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="Emissionsfreie Düngung" questionHead="Was hat das mit den Düngemitteln zu tun?" text1="Bei der Kartoffelernte kann PepsiCo die Emissionen reduzieren und die Biodiversität verbessern." colorCode="#5E522A" />
                <ContentContainer ownClass="rightContainer" text1="DÜNGE" text2="DAS FELD" nextRoute="EmiDung"/>
            </div>
        );
    } else {
        return (
            <div className="z-Index">
                <Video video={video} style={{transform: "scaleX(-1)"}} />
                <img src={Thumb} alt="Emissionsfreie Düngung" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="Emissionsfreie Düngung" questionHead="Was hat das mit den Düngemitteln zu tun?" text1="Bei der Kartoffelernte kann PepsiCo die Emissionen reduzieren und die Biodiversität verbessern." text2="PepsiCo setzt bereits jetzt emissionsarme Düngemittel ein und in den Walker's und Lay's Fabriken wird außerdem an der Herstellung eines emissionsarmen Düngers aus Kartoffelabfällen geforscht. PepsiCo kann dadurch die Emission reduzieren und CO² binden. Somit trägt PepsiCo maßgeblich für die Verbesserung der Biodiversität und Bodengesundheit bei." colorCode="#5E522A" />
                <ContentContainer ownClass="rightContainer" text1="WEITER" text2="GEHT'S" nextRoute="ICropPre"/>
            </div>
        );
    }
}