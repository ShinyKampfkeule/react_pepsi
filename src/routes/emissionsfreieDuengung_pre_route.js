import {motion} from "framer-motion";
import EmiDungComponent from "../components/page_components/emiDung_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[03] Aussäen - Frage.wav";

export default function EmiDungPre() {
    return(
        <>
            <EmiDungComponent state="pre" />
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}