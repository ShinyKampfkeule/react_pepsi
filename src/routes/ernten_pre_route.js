import {motion} from "framer-motion";
import ErntenComponent from "../components/page_components/ernte_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[07] Ernten - Frage.wav";

export default function ErntenPre() {
    return(
        <>
            <ErntenComponent state="pre" />
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}