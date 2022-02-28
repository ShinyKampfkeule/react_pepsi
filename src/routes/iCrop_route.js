import {motion} from "framer-motion";
import ICropComponent from "../components/page_components/iCrop_component"
import ErntenComponent from "../components/page_components/ernte_component"

export default function ICrop() {

    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: -1920}}
                transition={{duration: 1}}
            >
                <ICropComponent />
            </motion.div>
            <motion.div
                initial={{x: 1920}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <ErntenComponent state="pre" />
            </motion.div>
        </>
    );
}