import logoSvg from "assets/kc.svg"

export interface NavigationBarProps {

}


function NavigationBar({ ...rest }: NavigationBarProps) {



    return (
        <div className='fixed h-14 w-full top-0 left-0 right-0 bg-gradient-to-b from-gray-950 backdrop-blur-sm z-10' {...rest}>
            <div className='container max-w-6xl mx-auto h-full flex items-center px-4'>
                <img src={logoSvg} className="w-8 mr-2" />
                <h2 className='uppercase text-white text-lg font-bold'>kit like creative</h2>
            </div>
        </div>
    )
}

export { NavigationBar }