import { useEffect } from "react";
const NotFound = () => {
    useEffect(() => {
        document.title = `Web Event Request BEM FILKOM 2022`;
    }, [])
    return (
        <><section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-coffeetint">
            <div className="self-center max-w-5xl text-4xl text-center text-kuning font-bold">Halaman Tidak Ditemukan</div>
        </section></>
    )
}

export default NotFound;