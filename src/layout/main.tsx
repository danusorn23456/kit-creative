import { ReactNode } from 'react'
import { NavigationBar } from '~/components'

export interface MainLayoutProps {
    children: ReactNode
}


function MainLayout({ children }: MainLayoutProps) {

    return (
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 w-full overflow-auto pt-14 pb-28">
            <NavigationBar />
            {children}
        </div>
    )
}

export { MainLayout }