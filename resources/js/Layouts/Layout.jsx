import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="py-4 bg-slate-400">
                <nav className="flex mx-10 justify-between">
                    <Link
                        className="nav-link hover:shadow-md flex justify-center items-center p-2 aspect-video hover:shadow-gray-500 rounded-full font-semibold mx-4"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="nav-link hover:shadow-md flex justify-center items-center p-2 aspect-video hover:shadow-gray-500 rounded-full font-semibold mx-4"
                        href="/posts/create"
                    >
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
