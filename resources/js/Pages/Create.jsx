import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            <Head title="Create" />
            <h1 className="title font-bold text-lg my-8 text-center">
                Create a new post
            </h1>

            <div className="mx-auto w-3/4 bg-slate-300">
                <form className="flex items-center flex-col" onSubmit={submit}>
                    <textarea
                        className={`resize-none mt-10 p-2 rounded w-3/4 ${
                            errors.body && "border-red-500 border-2"
                        }`}
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>

                    {errors.body && (
                        <p className="error text-red-500 text-sm font-semibold mt-4">
                            {errors.body}
                        </p>
                    )}

                    <button
                        className="block my-4 px-4 py-1 disabled:opacity-50 bg-blue-300 hover:bg-blue-400 rounded"
                        disabled={processing}
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
