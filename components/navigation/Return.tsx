
"use client"

import { useRouter } from "next/navigation"

const Return = () => {
    const router = useRouter()
    return (
        <div className="btn-link p-2 m-1 cursor-pointer select-none" onClick={() => router.back()}>
            戻る
        </div>
    )
}

export default Return