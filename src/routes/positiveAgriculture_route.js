import {motion} from "framer-motion";
import PosAgrComponent from "../components/page_components/posAgr_component"
import EmiDungComponent from "../components/page_components/emiDung_component"
import sound from "../voices/[02] Feld vorbereiten - Antwort.wav";
import ReactAudioPlayer from "react-audio-player";

export default function PosAgr() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: "-100%"}}
                transition={{duration: 1}}
            >
                <PosAgrComponent />
            </motion.div>
            <motion.div
                initial={{x: "100%"}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <EmiDungComponent state="pre"/>
            </motion.div>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}