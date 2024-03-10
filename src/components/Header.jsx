import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to="/">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>FindA</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form action="" className='bg-slate-100 p-3 rounded-lg'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none'/>
        </form>
        <ul className="flex gap-4">
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/sign-in">
            <li>Sign In</li>
            </Link>
        </ul>
        </div>
    </header>

  )

}
