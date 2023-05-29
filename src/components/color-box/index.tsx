export interface ColorBoxProps {
    value?: string
}


function ColorBox({ value }: ColorBoxProps) {

    return (
        <div className='relative w-full md:w-24 h-8 rounded-md flex items-end' style={{ backgroundColor: value || "unset" }}>
            <span className='text-white text-xs text-center select-all w-full bg-black/50'>{value}</span>
        </div>
    )
}

export { ColorBox }