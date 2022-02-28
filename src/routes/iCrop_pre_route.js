import {motion} from "framer-motion";
import ICropComponent from "../components/page_components/iCrop_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[05] Bewässern - Frage.wav";

export default function ICropPre() {
    return(
        <>
            <ICropComponent state="pre" />
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}