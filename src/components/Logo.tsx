import { FC } from "react"

interface Props {
    anotherStyles?: boolean
    styles?: string
}

const Logo: FC<Props>= ({ anotherStyles = false, styles}) => {
    return (
        <div className={`font-medulaOne text-white px-6 pb-6 pt-8 ml-12 ${styles} ${anotherStyles ? "bg-white rounded-b-20 border-4 border-dark_green border-t-0" : ''}`}>
            <div className="relative flex justify-center">
                <svg width="140" height="92" viewBox="0 0 140 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_9_31" maskUnits="userSpaceOnUse" x="0" y="0" width="140" height="92">
                    <path d="M0 0H140V92H0V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_9_31)">
                    <path d="M44.8641 0.0583496C27.8449 0.0583496 11.7378 8.51248 0 8.51248V76.8662C11.7383 76.8662 27.8438 68.4121 44.8641 68.4121C54.8918 68.4121 61.1767 71.7508 64.952 75.0929H75.0513C78.8289 71.7542 85.1115 68.4121 95.1392 68.4121C112.158 68.4121 128.266 76.8662 140.003 76.8662V8.51248C128.265 8.51248 112.159 0.0583496 95.1392 0.0583496C75.0839 0.0583496 70.0028 13.421 70.0028 13.421C70.0028 13.421 64.9195 0.0583496 44.8664 0.0583496H44.8641ZM44.8641 75.9494C27.8472 75.9494 11.7405 84.4035 0 84.4035V91.9408C11.7383 91.9408 27.8438 83.4866 44.8641 83.4866C54.8918 83.4866 61.1767 86.8289 64.952 90.1674H75.0513C78.8289 86.8287 85.1115 83.4866 95.1392 83.4866C112.158 83.4866 128.266 91.9408 140.003 91.9408V84.4035C128.265 84.4035 112.159 75.9494 95.1392 75.9494C85.1115 75.9494 78.8267 79.2917 75.0513 82.6301H64.952C61.1744 79.2878 54.8918 75.9494 44.8641 75.9494Z" fill="#084A32"/>
                    </g>
                </svg>
                <span className="text-6xl absolute top-[3px]">Study</span>
            </div>
        </div>
    )
}

export default Logo;