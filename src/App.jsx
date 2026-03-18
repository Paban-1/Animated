import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const handleWheel = (e) => {
      setValue((prev) => {
        let next = prev + e.deltaY * 0.01;

        // limit it so it doesn’t go insane
        if (next < 1) next = 1;
        if (next > 3) next = 18;

        return next;
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-red-600 overflow-hidden">
      <div className="bg-red-200 p-10 rounded-full">
        <div className="flex justify-between gap-4">
          <div className="border-2 border-black rounded-full p-8">
            <div className="p-2 bg-black rounded-full"></div>
          </div>
          <div className="border-2 border-black rounded-full p-8">
            <div className="p-2 bg-black rounded-full"></div>
          </div>
        </div>

        <div
          style={{
            transform: `scale(${value})`,
          }}
          className="w-20 h-20 bg-black flex items-center justify-center text-black transition-transform rounded-full mt-2"
        >
          
        </div>
      </div>
    </div>
  );
}

export default App;
