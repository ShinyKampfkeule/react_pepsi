import {motion} from "framer-motion";
import FinalFinalComponent from "../components/page_components/final_component"
import Start from "../components/page_components/start_component"

export default function End() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: "-100%"}}
                transition={{duration: 1}}
            >
                <FinalFinalComponent />
            </motion.div>
            <motion.div
                initial={{x: "100%"}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <Start state="pre" />
            </motion.div>
        </>
    );
}