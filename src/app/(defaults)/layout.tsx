import ContentAnimation from '@/src/components/layouts/content-animation';
import Footer from '@/src/components/layouts/footer';
import Header from '@/src/components/layouts/header';
import MainContainer from '@/src/components/layouts/main-container'
import Overlay from '@/src/components/layouts/overlay';
import ScrollToTop from '@/src/components/layouts/scroll-to-top';
import Sidebar from '@/src/components/layouts/sidebar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* BEGIN MAIN CONTAINER */}
            <div className="relative">
                <Overlay />
                <ScrollToTop />
                
                <MainContainer>
                    <Sidebar />
                    <div className="main-content flex min-h-screen flex-col">
                        <Header />
                        <ContentAnimation>{children}</ContentAnimation>

                        <Footer />
                    </div>
                </MainContainer>
            </div>
        </>
    );
}
