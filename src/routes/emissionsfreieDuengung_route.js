import {motion} from "framer-motion";
import EmiDungComponent from "../components/page_components/emiDung_component"
import ICropComponent from "../components/page_components/iCrop_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[04] Aussäen - Antwort.wav";

export default function EmiDung() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: -1920}}
                transition={{duration: 1}}
            >
                <EmiDungComponent />
            </motion.div>
            <motion.div
                initial={{x: 1920}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <ICropComponent state="pre" />
            </motion.div>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}