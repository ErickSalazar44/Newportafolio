import { useEffect, useRef, useState } from 'react';

const TitleAnimado = ({ title }) => {

    const [animate, setAnimate] = useState(false)

    const contenedor = useRef(null)

    useEffect(() => {
        const element = contenedor.current
        const handleScroll = () => {
            if (element) {
                const windowHeigth = window.innerHeight;
                const elementPosition = element.getBoundingClientRect().top;

                if (elementPosition < windowHeigth * 0.8 && !animate) {
                    setAnimate(true)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [animate])


    return (
        <div ref={contenedor}>
            {title.split(' ').map((letters, index) => (
                <span key={`letters-${index}`} className="block overflow-hidden">
                    {letters.split('').map((letter, i) => (
                        <span
                            key={`letra-${i}`}
                            className={`${!animate ? 'translate-y-full rotate-45' : 'translate-y-0 rotate-0'} inline-block transition-transform duration-500`}
                            style={{ transitionDelay: `calc(75 * ${i}ms)` }}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            ))}
        </div>
    )
}

export default TitleAnimado