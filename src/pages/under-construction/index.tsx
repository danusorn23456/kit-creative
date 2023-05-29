import { MainLayout } from '~/layout'

export interface UnderConstructionPageProps {

}


function UnderConstructionPage({ ...rest }: UnderConstructionPageProps) {



    return (
        <MainLayout {...rest}>
            <div className='text-6xl absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>Cooming soon</div>
        </MainLayout>
    )
}

export { UnderConstructionPage }