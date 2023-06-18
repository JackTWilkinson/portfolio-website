'use client';
import Link from 'next/link';
import {useState, useEffect} from 'react';

export default function Navbar() {
    const [fix, setFix] = useState(false);
    const [top, setTop] = useState<number>(0);

    useEffect(() => {
        console.log('Component Rendered');
        const navEl = document.getElementById('navbar')!;
        setTop(navEl.offsetTop);
    }, [])

    const fixNav = () => {
        if (window.scrollY >= top) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", fixNav);
    return(
         <div id='navbar' className={fix ? 'sticky' : ''}>
             <ul>
                 <li>
                     <Link href="#title">Title</Link>
                 </li>
                 <li>
                     <Link href="#about">About</Link>
                 </li>
             </ul>
         </div>
    )
}