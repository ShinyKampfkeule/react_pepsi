import {motion} from "framer-motion";
import PosAgrComponent from "../components/page_components/posAgr_component"
import EmiDungComponent from "../components/page_components/emiDung_component"

export default function PosAgr() {
    return(
        <>
            <motion.div
                animate={{x: 0}}
                exit={{x: -1920}}
                transition={{duration: 1}}
            >
                <PosAgrComponent />
            </motion.div>
            <motion.div
                initial={{x: 1920}}
                exit={{x: 0}}
                transition={{duration: 1}}
                className="pageContainer"
            >
                <EmiDungComponent state="pre"/>
            </motion.div>
        </>
    );
}