import React, { ReactNode } from "react";
import LayoutSidebar from "./components/sidebar/layout-sidebar";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const MemoizedLayoutSidebar = React.memo(LayoutSidebar);
const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full h-screen">
            {/* Barra lateral de navegación */}
            <MemoizedLayoutSidebar>
                <div className="flex flex-col flex-1 w-full">
                    {/* Header */}
                    <div className="px-4 w-full">
                        <MemoizedHeader />
                    </div>

                    {/* Contenido dinámico (varía según la página) */}
                    <div className="flex-1 px-4 w-full">{children}</div>

                    {/* Footer */}
                    <div className="p-4 w-full">
                        <MemoizedFooter />
                    </div>
                </div>
            </MemoizedLayoutSidebar>
        </div>
    );
}
