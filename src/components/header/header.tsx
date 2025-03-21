import DynamicBreadCrumb from "../dynamicBreadCrumb/dynamicBreadCrumb";
import { Label } from "../ui/label";
import { Breadcrumb, BreadcrumbList } from "../ui/breadcrumb";
import { UserHeader } from "../header/user-header";

export default function Header() {
    const userData = {
        name: "User",
        email: "example@unicauca.com",
        avatar: "user.png",
    };

    return (
        <>
            <header className="border-b-2 border-tertiary/15 w-full flex items-center justify-between">
                <Label className="text-xl font-bold">
                    Sistema de Pensionados
                </Label>
                <div className="flex items-center">
                    <UserHeader user={userData} />
                </div>
            </header>
            <Breadcrumb className="py-4">
                <BreadcrumbList>
                    <DynamicBreadCrumb />
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}