import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/PosAgr.mp4";
import Thumb from "../../images/ThumbnailPosAgr.png";

export default function PosAgrComponent({state}) {
    if (state === "pre") {
        return(
            <div className="maxSize">
                <img src={Thumb} alt="Positive Agriculture" className="ThumbImage" />
                <ContentContainer ownClass="leftContainer" textHead="Positive Agrarkultur" questionHead="Doch wie genau sehen diese Maßnahmen aus?" text1="PepsiCo arbeitet mit Landwirtschaftsbetrieben auf der ganzen Welt zusammen, um zu zeigen, dass nachhaltige Technologien und Praktiken effizienter und rentabler sein können." colorCode="#713B15" />
                <ContentContainer ownClass="rightContainer" text1="PFLANZE" text2="DIE KARTOFFELN" nextRoute="PosAgr" />

            </div>
        );
    } else {
        return(
            <div className="maxSize">
                <Video video={video} id="video" />
                <img src={Thumb} alt="Positive Agriculture" className="ThumbImage" />
                <ContentContainer ownClass="leftContainer" textHead="Positive Agrarkultur" questionHead="Doch wie genau sehen diese Maßnahmen aus?" text1="PepsiCo arbeitet mit Landwirtschaftsbetrieben auf der ganzen Welt zusammen, um zu zeigen, dass nachhaltige Technologien und Praktiken effizienter und rentabler sein können." text2="Regenerative Landwirtschaftspraktiken tragen zur Wiederherstellung natürlicher Ökosysteme bei, indem sie organisches Material und die biologische Vielfalt wiederherstellen. Demonstrationsfarmen in einem globalen Netzwerk helfen dabei, diese Praktiken umzusetzen. Gemeinsam mit Farmen und Logistikunternehmen treibt PepsiCo außerdem die Umstellung auf erneuerbare Energien voran." colorCode="#713B15" />
                <ContentContainer ownClass="rightContainer" text1="NÄCHSTER" text2="SCHRITT" nextRoute="EmiDungPre" />
            </div>
        );
    }
}