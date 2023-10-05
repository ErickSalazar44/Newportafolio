import { useEffect, useRef } from "react"
import { handleMouseMove, handleMouseOut } from '../utils/movimientoCard'

const CardProyect = ({ img, fecha, title, odd }) => {

    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current;

        container.addEventListener("mousemove", (e) => {
            handleMouseMove(e, container);
        });

        container.addEventListener("mouseout", () => {
            handleMouseOut(container);
        });

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseout", handleMouseOut);
        };
    }, [])


    return (
        <article className="mt-14 ">
            <a href="/"
                className={`group aspect-[16/12] bg-cover bg-center bg-no-repeat block relative  w-full sm:w-[420px] md:w-[520px] lg:w-[620px] ${odd ? 'ml-auto' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
                ref={containerRef}
            >
                <div
                    className={`absolute w-full aspect-[16/12] group-hover:bg-black transition  group-hover:opacity-50 duration-300`}
                ></div>
                <span className={`opacity-80 sm:text-lg md:text-xl lg:text-2xl absolute -top-8 font-clash sm:top-0 ${odd ? ' sm:-left-20' : 'sm:-right-20'}`}>{fecha}</span>
                <div className="absolute left-4 bottom-14 sm:left-6 sm:bottom-16 md:left-8 z-10">
                    <p className="font-clash text-3xl sm:text-4xl md:text-5xl">
                        {
                            title.split(' ').map((letters: string, i:number) => (
                                <span key={`parrafo-${i}`} className="block overflow-hidden">
                                    {
                                        letters.split('').map((letter, i) => (
                                            <span key={`parrafo2-${i}`} className="group-hover:rotate-0 group-hover:translate-y-0 group-hover:transition-transform group-hover:duration-500 inline-block rotate-45 translate-y-full transition-transform duration-500"
                                                style={{ transitionDelay: `calc(45 * ${i}ms)` }}
                                            >{letter}</span>
                                        ))
                                    }
                                </span>
                            ))
                        }
                    </p>
                    <span className="block scale-0 group-hover:scale-100 transition-transform duration-300 group-hover:transition-transform group-hover:duration-300 delay-200 font-clash sm:text-lg">2023</span>
                </div>
                <img className="absolute w-0 lg:w-28 -right-14 bottom-16 group-hover:transition-transform group-hover:duration-1000 group-hover:opacity-90 opacity-0 transition group-hover:scale-100 group-hover:rotate-[365deg] scale-0 duration-500" src="/link.svg" alt="Link" />
            </a>
        </article>
    )
}

export default CardProyect