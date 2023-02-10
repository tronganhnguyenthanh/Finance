import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import IconBlock from "../components/iconIntroBlock/IconBlock"
import MortGageCalculator from "../components/mortGageCalculator/MortGageCalculator"
import "../css/style.css"
const App = () => {
  return (
   <div className="App">
     <Header/>
     <Hero/>
     <IconBlock/>
     <MortGageCalculator/>
     <Footer/>
   </div>
  )
}
export default App
