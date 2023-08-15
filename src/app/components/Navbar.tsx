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
    
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', fixNav);
    }
    
    return(
         <div id='navbar' className={fix ? 'sticky' : ''}>
             <ul className='font-roboto'>
                {[
                    ['Title', '#title'],
                    ['About', '#about'],
                    ['Work Experience', '#work-experience'],
                    ['Education', '#education'],
                ].map(([title, url, key]) => (
                    <li key={ key }>
                        <Link className='hover:text-gray-500' href={ url }>{ title }</Link>
                    </li>
                ))}
             </ul>
         </div>
    )
}