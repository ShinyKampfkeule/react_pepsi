import {motion} from "framer-motion";
import PosAgrComponent from "../components/page_components/posAgr_component"
import sound from "../voices/[01] Feld vorbereiten - Frage.wav";
import ReactAudioPlayer from "react-audio-player";

export default function PosAgrPre() {
    return(
        <>
            <PosAgrComponent state="pre" />
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}