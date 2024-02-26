import { useState } from "react";

const Home = () => {

    const [playbackKey, setPlaybackKey] = useState('');
    const [numNotes, setNumNotes] = useState<number>();

    return (
        <div className="w-full flex flex-row justify-center">
            <div className="w-full flex flex-col place-items-center gap-4">
                <div className="">
                    <h1>Playback Generator</h1>
                </div>
                <div className="flex flex-col">
                    <div>
                        <p>Key</p>
                        <input type="text" value={playbackKey} onChange={(e) => setPlaybackKey(e.target.value)} />
                    </div>
                    <div>
                        <p>Number of notes</p>
                        <input type="number" value={numNotes} onChange={(e) => setNumNotes(Math.max(0, parseInt(e.target.value)))} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;