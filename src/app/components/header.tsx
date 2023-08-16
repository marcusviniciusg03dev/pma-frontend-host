import Link from "next/link"
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className='flex h-[12vh] shadow-md shadow-[#00000010] top-0 left-0 right-0 w-[100%]'>
            <div className='flex bg-[#FF3737] w-[12vh] font-bold text-[#FFB6B6] text-center items-center justify-center'>
                <h1>APP</h1>
            </div>
            <nav className='flex m-auto gap-20'>
                {[{ name: 'início', pathname: '/' }].map(route => pathname == route.pathname ? (
                    <div key={route.name} className='text-[#4e37ff] font-bold capitalize underline underline-offset-8'>
                        {route.name}
                    </div>
                ) : (
                    <Link key={route.name} href={route.pathname} className={`text-[#343434] font-semibold capitalize`}>
                        {route.name}
                    </Link>
                )
                )}
            </nav>
        </header>
    )
}