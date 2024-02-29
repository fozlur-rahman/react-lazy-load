import { Suspense, useState } from "react";
import "./App.css";
import demos from "./data/demos";
import importDemos from "./utils/importDemos";

function App() {
    const [selectedDemo, setSelectedDemo] = useState(null);

    const selectDemo = async (file) => {
        const Demo = await importDemos(file);
        const DemoComponent = <Demo />;
        setSelectedDemo(DemoComponent);
    };

    return (
        <>
            <h1>create yopur best app</h1>
            <div className="flex justify-between border w-fit p-5">
                {demos.map((demo) => (
                    <button
                        key={demo.name}
                        onClick={() => selectDemo(demo.file)}
                        className="bg-gray-500 mx-5 px-5 py-2 rounded"
                    >
                        {demo.name}
                    </button>
                ))}
            </div>

            <div className="border p-20">
                <Suspense fallback={<h1>Demo is loading....</h1>}>
                    {selectedDemo}
                </Suspense>
            </div>
        </>
    );
}

export default App;
