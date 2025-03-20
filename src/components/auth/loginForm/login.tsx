import Footer from "../../footer/topFooter/topFooter";
import MultiColorBar from "../../ui/multiColorBar";
import LoginForm from "./loginForm";
import LoginSide from "./loginSide/loginSide";

export default function Login(){
    return(
        <>
            <div className="flex gap-2 w-full h-full md:h-screen">
                <LoginForm />
                <LoginSide />
            </div>
            <MultiColorBar />
            <Footer />
        </>
    );
}