import React from "react";
import {
    Home,
} from "lucide-react";

import { NavMain } from "../sidebar/nav-main"; 

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "../ui/sidebar";

const data = {
    navMain: [
        {
            title: "Inicio",
            url: "/home",
            icon: Home,
            isActive: true,
        },
        {
            title: "Entidades",
            url: "#",
            icon: Home,
            items: [
            ],
        },
        {
            title: "Pensionados",
            url: "#",
            icon: Home,
            items: [
            ],
        },
        {
            title: "Gestion Cuotas Partes",
            url: "#",
            icon: Home,
            items: [
            ],
        }
    ],
};

export const AppSidebar = React.memo(function AppSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="bg-blueDark text-white p-4 items-start">
                <a href="/">
                    <img
                        src="/u.png"
                        alt="Logo"
                        width={110}
                        height={110}
                        className="group-data-[collapsible=icon]:w-0"
                    />
                </a>
            </SidebarHeader>
            <SidebarContent className="bg-blueDark text-white pt-10">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
});
