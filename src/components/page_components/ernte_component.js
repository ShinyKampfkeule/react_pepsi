import Video from "../../components/Video/video";
import ContentContainer from "../../components/ContentContainer/contentContainer";
import video from "../../videos/Oeko.mp4";
import Thumb from "../../images/ThumbnailHarvest.png"
import map from "../../images/Deutschland_Lage_von_Bayern.svg"

export default function ErntenComponent({state}) {
    if (state === "pre") {
        return(
            <div className="maxSize">
                <img src={Thumb} alt="Ernte" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer" textHead="Zustand des Ökosystems" questionHead="Wie geht PepsiCo damit um?" text1="Die Landwirtschaft trägt zu den größten ökologischen und sozialen Herausforderungen der Welt bei." colorCode="#40372C" />
                <ContentContainer ownClass="rightContainer" text1="ERNTE DEINE" text2="KARTOFFELN" nextRoute="Ernten"/>
            </div>
        );
    } else {
        return(
            <div className="maxSize">
                <Video video={video} />
                <img src={Thumb} alt="Positive Agriculture" className="ThumbImage"/>
                <ContentContainer ownClass="leftContainer"
                                  textHead="Zustand des Ökosystems"
                                  questionHead="Wie geht PepsiCo damit um?"
                                  text1="Die Landwirtschaft trägt zu den größten ökologischen und sozialen Herausforderungen der Welt bei."
                                  text2={`PepsiCo nutzt seine Rolle als zweitgrößter Lebensmittelkonzern der Welt, um den Zustand des Ökosystems wiederherzustellen und zu verbessern. Sie arbeiten daran, ihre Pflanzen und Zutaten so zu beschaffen, dass sich Ressourcen regenerieren können und die landwirtschaftlichen Gemeinschaften gestärkt werden. Ihr Ziel ist es, bis 2030 rund 7 Millionen Hektar Land zu regenerieren. Das entspricht ungefähr der gesamten Fläche von Bayern.`}
                                  image1={map}
                                  colorCode="#40372C" />
                <ContentContainer ownClass="rightContainer" text1="WIR HABEN ES" text2="FAST GESCHAFFT" nextRoute="SchlussPre"/>
            </div>
        );
    }
}