import Link from "next/link";

export type NavButtonProps = {}

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
    return (
        <div 
            id='nav-button' className='position: fixed top-3 sm:top-3 left-3 sm:left-3 m-1' 
        >
            <details className="dropdown mb-32">
              <summary className="bg-slate-800 border-0 text-white btn">Navigation</summary>
              <ul className='mt-1 font-roboto p-2 shadow menu dropdown-content bg-slate-700 text-white rounded-box w-52'>
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
            </details>
        </div>
    );
}

export default NavButton;