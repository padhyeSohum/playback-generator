import { useState } from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

const Home = () => {

    const [playbackKey, setPlaybackKey] = useState("");
    const [isMajor, setIsMajor] = useState(true);
    const [numberOfNotes, setNumberOfNotes] = useState<number>();

    return (
        <div className="w-full flex flex-row justify-center">
            <div className="w-full flex flex-col place-items-center gap-4">
                <div className="">
                    <h1>Playback Generator</h1>
                </div>
                <div className="flex flex-col">
                    <div>
                        <p className={`${playbackKey != "" ? "text-white" : "text-cozy-gray"} transition-all duration-200 select-none`}>Key</p>
                        <input placeholder="Key" type="text" value={playbackKey} onChange={(e) => setPlaybackKey(e.target.value)} className={`p-2 outline-none text-black transition-all duration-200`}/>
                    </div>
                    <div>
                        <RadioGroup defaultValue="solid" name="majorOrMinor">
                            <Radio checked={isMajor == true} onChange={() => {setIsMajor(!isMajor)}} value="Major" label="Major" />
                            <Radio checked={isMajor == false} onChange={() => {setIsMajor(!isMajor)}} value="Minor" label="Minor" />
                        </RadioGroup>
                    </div>
                    <div>
                        <p className={`${numberOfNotes != undefined || numberOfNotes != "" ? "text-white" : "text-cozy-gray"} transition-all duration-200 select-none`}>Key</p>
                        <input placeholder="Number of notes" type="number" value={numberOfNotes} onChange={(e) => setNumberOfNotes(Math.max(0, e.target.valueAsNumber))} className={`p-2 outline-none text-black transition-all duration-200`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;