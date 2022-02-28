import FinalComponent from "../components/page_components/schluss_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[09] WWF - Frage.wav";

export default function SchlussPre() {
    return(
        <>
            <FinalComponent state="pre" />
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}