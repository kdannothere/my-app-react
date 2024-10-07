// import Layout from "../Layouts/Layout";

import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ posts }) {
    const { flash } = usePage().props;
    // console.log(usePage());
    const { component } = usePage();

    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flashSuccess, setFlashSuccess] = useState(flash.success);
    console.log("=" + flashSuccess);

    setTimeout(() => {
        setFlashSuccess(null);
    }, 4000);

    setTimeout(() => {
        setFlashMsg(null);
    }, 4000);

    return (
        <div className="pb-16 relative">
            <Head title={component} />
            <div className="text-center font-bold my-4">
                <h1>Hello</h1>
            </div>

            {flashSuccess && (
                <div className="p-4 right-2 top-2 text-center text-sm absolute text-white bg-green-500 rounded-full font-bold">
                    {flashSuccess}
                </div>
            )}

            {flashMsg && (
                <div className="p-4 right-2 top-2 text-center text-sm absolute text-white bg-red-500 rounded-full font-bold">
                    {flashMsg}
                </div>
            )}

            {/* {flash.message && (
                <div className="p-4 text-red-500 font-bold">
                    {flash.message}
                </div>
            )} */}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        <Link
                            className="text-blue-500 hover:text-blue-600 font-semibold"
                            href={`/posts/${post.id}`}
                        >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url && !link.active ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`mx-1 p-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            } ${
                                link.url && !link.active
                                    ? " hover:underline"
                                    : ""
                            } ${!link.url ? "opacity-50" : ""}`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`mx-1 p-1 cursor-default ${
                                link.active
                                    ? "text-blue-500 font-bold"
                                    : "text-slate-400"
                            }`}
                        ></span>
                    )
                )}
            </div>
        </div>
    );
}

// Home.layout = (page) => <Layout children={page} />;

// export default Home;

// <Link
//     preserveScroll
//     href="/"
//     className="block w-fit mx-auto mt-[600px]"
// >
//     {new Date().toLocaleTimeString()}
// </Link>
