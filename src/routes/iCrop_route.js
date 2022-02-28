import {motion} from "framer-motion";
import ICropComponent from "../components/page_components/iCrop_component"
import ErntenComponent from "../components/page_components/ernte_component"
import ReactAudioPlayer from "react-audio-player";
import sound from "../voices/[06] Bewässern - Antwort.wav";

export default function ICrop() {

    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: "-100%"}}
                transition={{duration: 1}}
            >
                <ICropComponent />
            </motion.div>
            <motion.div
                initial={{x: "100%"}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <ErntenComponent state="pre" />
            </motion.div>
            <ReactAudioPlayer
                src={sound}
                autoPlay
                volume={0.4}
            />
        </>
    );
}