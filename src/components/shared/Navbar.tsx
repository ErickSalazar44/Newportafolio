import { useEffect, useState } from 'react';
import { navegadores } from '../../data/navegadores';

const NavBar = () => {

    const [scrollY, setScrollY]= useState(false)

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
        <nav className={`w-full py-2 backdrop-blur-[8px] fixed z-50 transition-transform duration-300 ease-in ${scrollY ? '-translate-y-[3rem]': ''} `}>
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
        </nav>
    )
}

export default NavBar;