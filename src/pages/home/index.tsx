import { MainLayout } from '~/layout'

export interface HomePageProps {

}


function HomePage({ ...rest }: HomePageProps) {



    return (
        <MainLayout {...rest}>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col space-y-2 items-center'>
                    <h2 className='text-gray-50 text-5xl'>Hello Web Dev</h2>
                    <p className='text-gray-50 text-xl'>wait for new design</p>
                </div>
            </div>
        </MainLayout>
    )
}

export { HomePage }