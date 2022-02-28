import {motion} from "framer-motion";
import ErntenComponent from "../components/page_components/ernte_component"
import FinalComponent from "../components/page_components/schluss_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[08] Ernten - Antwort.wav";

export default function Ernten() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: -1920}}
                transition={{duration: 1}}
            >
                <ErntenComponent />
            </motion.div>
            <motion.div
                initial={{x: 1920}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <FinalComponent state="pre" />
            </motion.div>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}