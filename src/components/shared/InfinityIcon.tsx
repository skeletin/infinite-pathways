export interface InfinityIconProps {
    size?: number
    className?: string
}

const InfinityIcon = ({ size = 24, className = "" }: InfinityIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="556.35 655.76 387.36 188.45"
        width={size}
        height={size * (188.45 / 387.36)}
        className={className}
        aria-hidden="true"
    >
        <defs>
            <clipPath id="ip-infinity-clip">
                <path
                    d="M 573.785156 673.105469 L 926.285156 673.105469 L 926.285156 826.855469 L 573.785156 826.855469 Z"
                    clipRule="nonzero"
                />
            </clipPath>
        </defs>
        <g clipPath="url(#ip-infinity-clip)">
            <path
                strokeLinecap="round"
                transform="matrix(0.390365, 0, 0, 0.390198, 554.850994, 554.881348)"
                fill="none"
                strokeLinejoin="round"
                d="M 560.804147 447.953013 C 642.058145 374.893216 737.991899 283.493387 849.465981 361.64875 C 1030.886546 488.827657 841.540714 764.098314 658.519084 633.475645 C 552.348527 557.702885 454.253337 451.907332 348.803258 372.770898 C 153.923749 226.531171 -36.592862 518.159695 159.35736 643.396481 C 269.530577 713.813392 360.481019 619.149998 440.524213 551.686313"
                stroke="currentColor"
                strokeWidth="57.130001"
                strokeOpacity="1"
                strokeMiterlimit="4"
            />
        </g>
    </svg>
)

export default InfinityIcon
