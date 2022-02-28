import PosAgrComponent from "../components/page_components/posAgr_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[01] Feld vorbereiten - Frage.wav"

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