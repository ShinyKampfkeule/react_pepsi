import {motion} from "framer-motion";
import FinalComponent from "../components/page_components/schluss_component"
import FinalFinalComponent from "../components/page_components/final_component"

export default function Schluss() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: -1920}}
                transition={{duration: 1}}
            >
                <FinalComponent />
            </motion.div>
            <motion.div
                initial={{x: 1920}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <FinalFinalComponent state="pre"/>
            </motion.div>
        </>
    );
}