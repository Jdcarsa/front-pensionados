
import './App.css'
import LoginForm from './components/auth/loginForm/loginForm'
import LoginSide from './components/auth/loginForm/loginSide/loginSide'
import Footer from './components/footer/topFooter/topFooter'
import MultiColorBar from './components/ui/multiColorBar'
function App() {


  return (
    <>
      <div className="flex gap-2 w-full h-full md:h-screen">
        <LoginForm />
        <LoginSide></LoginSide>
      </div>
      <MultiColorBar />
      <Footer />
    </>
  )
}

export default App
