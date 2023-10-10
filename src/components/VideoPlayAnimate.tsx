import { useRef, useState } from "react";


const VideoPlayAnimate = ({ img, id, ruta }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [playButtonPosition, setPlayButtonPosition] = useState({ x: 0, y: 0 });
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    const handleMouseMove = (e) => {
        if (isMouseOver) {
            const rect = videoRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - 55;
            const y = e.clientY - rect.top - 55;
            setPlayButtonPosition({ x, y });
        }

    };


    return (
        <a
            href={ruta}
            target="_blank"
            className="cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt="Alura"
                    ref={videoRef}
                    className="w-full aspect-[16/12] "
                    style={{ viewTransitionName: `img-${id}` }}
                />
                {isMouseOver && (
                    <div
                        className={`absolute animate-scaleInCenter`}
                        style={{ top: playButtonPosition.y, left: playButtonPosition.x }}

                    >
                        <div className="w-32 h-32 bg-black bg-opacity-50 text-white p-2 rounded-full relative ">
                            <div className="rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                                    <polygon points="50,10 90,90 10,90" fill="currentColor" />
                                </svg>
                            </div>
                            <svg className="block w-full h-full animate-spin" viewBox="0 0 152 152">
                                <circle transform="rotate(-90 76 76)" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="343 343" cx="76" cy="76" r="72.7" />
                                <circle transform="rotate(90 76 76)" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="309 309" cx="76" cy="76" r="65.5" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </a>
    )
}

export default VideoPlayAnimate