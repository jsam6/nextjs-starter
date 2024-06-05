// import ContentAnimation from '@/src/components/layouts/content-animation';
// import Footer from '@/src/components/layouts/footer';
import Header from '@/src/components/layouts/header';
import MainContainer from '@/src/components/layouts/main-container'
// import Overlay from '@/src/components/layouts/overlay';
// import ScrollToTop from '@/src/components/layouts/scroll-to-top';
// import Setting from '@/src/components/layouts/setting';
import Sidebar from '@/src/components/layouts/sidebar';
// import Portals from '@/src/components/portals';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                
                <MainContainer>
                    <Sidebar />
                    <div className="main-content flex min-h-screen flex-col">
                        <Header />

                    </div>
                </MainContainer>
            </div>
        </>
    );
}
