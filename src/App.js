import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Start from "./routes/start_route";
import PosAgrPre from "./routes/positiveAgriculture_pre_route";
import PosAgr from "./routes/positiveAgriculture_route";
import EmiDungPre from "./routes/emissionsfreieDuengung_pre_route";
import EmiDung from "./routes/emissionsfreieDuengung_route";
import ICropPre from "./routes/iCrop_pre_route";
import ICrop from "./routes/iCrop_route";
import ErntenPre from "./routes/ernten_pre_route";
import Ernten from "./routes/ernten_route";
import SchlussPre from "./routes/schluss_pre_route";
import Schluss from "./routes/schluss_route";
import End from "./routes/final_route";
// import sound from "./music/Progress .wav";
import sound from "./music/Hopeful For.wav";
import ReactAudioPlayer from "react-audio-player";

function App() {
    const location = useLocation();
    let music = <></>
    if (location.pathname !== '/') {
        if (location.pathname !== '/NewStart') {
            music = <ReactAudioPlayer src={sound} autoPlay={true} loop={true} volume={0.2}/>
        }
    } else {
        music = <></>
    }
    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Start state="first" />} />
                    <Route path="/PosAgrPre" element={<PosAgrPre />} />
                    <Route path="/PosAgr" element={<PosAgr />} />
                    <Route path="/EmiDungPre" element={<EmiDungPre />} />
                    <Route path="/EmiDung" element={<EmiDung />} />
                    <Route path="/ICropPre" element={<ICropPre />} />
                    <Route path="/ICrop" element={<ICrop />} />
                    <Route path="/ErntenPre" element={<ErntenPre />} />
                    <Route path="/Ernten" element={<Ernten />} />
                    <Route path="/SChlussPre" element={<SchlussPre />} />
                    <Route path="/Schluss" element={<Schluss />} />
                    <Route path="/Final" element={<End />} />
                    <Route path="/NewStart" element={<Start state="second" />} />
                    <Route path="/Test" element={<End state="pre" />} />
                </Routes>
            </AnimatePresence>
            {music}
        </div>
    );
}

export default App;
