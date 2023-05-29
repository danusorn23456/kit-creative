import { HTMLAttributes, MouseEvent, ReactNode, useRef } from 'react'

export interface ShinyPaperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    lightHeight?: number,
    lightWidth?: number
}

function ShinyPaper({ children, className, lightWidth = 300, lightHeight = 300, ...rest }: ShinyPaperProps) {
    const paperRef = useRef<HTMLDivElement>(null)
    const lightingRef = useRef<HTMLDivElement>(null)

    function handleMouseMove(e: MouseEvent) {
        if (lightingRef.current && paperRef.current) {
            lightingRef.current.style.opacity = '1'
            const { left, top } = paperRef.current.getBoundingClientRect()
            const x = (e.clientX - left) - ((lightWidth / 2) + paperRef.current.offsetLeft);
            const y = (e.clientY - top) - ((lightHeight / 2) - paperRef.current.offsetHeight * 2);

            lightingRef.current.style.transform = `translate(${x}px,${y}px)`
        }
    }

    function handleMouseLeave() {
        if (lightingRef.current) {
            lightingRef.current.style.opacity = '0'
        }
    }

    return (
        <div ref={paperRef} className={[className, "relative"].join(" ")} {...rest} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
            <div ref={lightingRef} className='absolute bg-white/50 rounded-full'
                style={{
                    transition: 'opacity 500ms,translate 200ms',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0,0,0,0) 40%)',
                    width: lightWidth,
                    height: lightHeight,
                    opacity: 0,
                    pointerEvents: 'none'
                }}></div>
        </div>
    )
}

export { ShinyPaper }