import { ReactNode } from "react"

type FooterProps = {
    siteTitle: ReactNode
    siteName: string
}

export default function Footer(props: FooterProps) {
    return (
        <footer className="text-white">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* ロゴやブランド名 */}
                    <div className="flex items-center">
                        {props.siteTitle}
                    </div>
                </div>
                {/* 著作権情報 */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2023 {props.siteName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}