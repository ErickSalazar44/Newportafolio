import { useEffect, useState } from 'react';
import { navegadores } from '../../data/navegadores';

const NavBar = () => {

    const [scrollY, setScrollY] = useState(false)

    useEffect(() => {

        let lastScrollTop = window.scrollY

        const handleScroll = () => {
            const posicionActualScroll = window.scrollY
            if (posicionActualScroll > lastScrollTop) {
                setScrollY(true)
            } else if (posicionActualScroll < lastScrollTop) {
                setScrollY(false)
            }

            lastScrollTop = posicionActualScroll
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <div className={`w-[calc(100%-4px)] sm:w-[calc(100%-4px-4rem)] mx-auto max-w-[1150px] fixed backdrop-blur-[8px] top-0 py-2 z-50 transition-transform duration-300 ease-in ${scrollY ? '-translate-y-[100%]' : ''} `}>
            <nav className='px-1 mx-auto max-w-sm rounded-3xl z-100'>
                <div>
                    <ul className="flex justify-center">
                        {
                            navegadores.map(({ title, ruta }) => (
                                <li key={title}>
                                    <a className="block py-2 px-3 font-semibold tracking-tighter transition hover:text-teal-400 active:text-teal-400 text-white" href={ruta}>
                                        {title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;