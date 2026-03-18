import { useEffect, useState } from "react";

function Animate() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <h1
        style={{
          transform: `translateY(-${offset * 0.3}px)`
        }}
        className="text-4xl font-bold"
      >
        Now I go UP, not gym
      </h1>
    </div>
  );
}

export default Animate;