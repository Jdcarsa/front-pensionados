import { JSX } from "react";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { routeList } from "../dynamicBreadCrumb/routeList";

export default function DynamicBreadCrumb() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter((segment) => segment && segment !== "home"); 
    const breadcrumbItems: JSX.Element[] = [];


    breadcrumbItems.push(
        <BreadcrumbItem key="/home">
            <BreadcrumbLink asChild>
                <a href="/home">{routeList["/home"] || "Inicio"}</a>
            </BreadcrumbLink>
        </BreadcrumbItem>
    );

    if (segments.length > 0) {
        breadcrumbItems.push(<BreadcrumbSeparator key="sep-home" />);
    }

    segments.forEach((segment, index) => {
        const navigationPath = `/${segments.slice(0, index + 1).join("/")}`;
        const label = routeList[navigationPath] || decodeURIComponent(segment);
        const isLast = index === segments.length - 1;

        breadcrumbItems.push(
            <BreadcrumbItem key={navigationPath}>
                {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                    <BreadcrumbLink asChild>
                        <a href={navigationPath}>{label}</a>
                    </BreadcrumbLink>
                )}
            </BreadcrumbItem>
        );

        // Agregar separador solo si no es el último segmento
        if (!isLast) {
            breadcrumbItems.push(<BreadcrumbSeparator key={`sep-${navigationPath}`} />);
        }
    });

    return <>{breadcrumbItems}</>;
}