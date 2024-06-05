import ProviderComponent from '@/src/components/layouts/provider-component';
import '../styles/tailwind.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | VRISTO - Multipurpose Tailwind Dashboard Template',
        default: 'VRISTO - Multipurpose Tailwind Dashboard Template',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
