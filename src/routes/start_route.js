import {motion} from "framer-motion";
import StartComponent from "../components/page_components/start_component"
import PosAgrComponent from "../components/page_components/posAgr_component"

export default function Start({state}) {
    if (state === "first") {
        return(
            <>
                <motion.div
                    animate={{x: 0}}
                    exit={{x: "-100%"}}
                    transition={{duration: 1}}
                >
                    <StartComponent />
                </motion.div>
                <motion.div
                    animate={{x: "100%"}}
                    exit={{x: 0}}
                    transition={{duration: 1}}
                    className="pageContainer"
                >
                    <PosAgrComponent state="pre" />
                </motion.div>
            </>
        );
    } else {
        return(
            <>
                <motion.div
                    animate={{x: 0}}
                    exit={{x: "-100%"}}
                    transition={{duration: 1}}
                >
                    <StartComponent />
                </motion.div>
                <motion.div
                    initial={{x: "100%"}}
                    exit={{x: 0}}
                    transition={{duration: 1}}
                    className="pageContainer"
                >
                    <PosAgrComponent state="pre" />
                </motion.div>
            </>
        );
    }

}