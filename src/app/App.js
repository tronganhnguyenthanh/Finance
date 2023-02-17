import {Route, Routes} from "react-router-dom"
import "../css/style.css"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import IconBlock from "../components/iconIntroBlock/IconBlock"
import MortGageCalculator from "../components/mortGageCalculator/resultMortGageCalculator/MortGageCalculator"
import CuteCat from "../pages/customRoutes/CustomRoute"
const App = () => {
 return (
  <div className="App">
    <Header/>
    <Hero/>
    <IconBlock/>
    <MortGageCalculator/>
    <Footer/>
    <Routes>
      <Route path="/cute-cats" element={<CuteCat/>}/>
    </Routes>
   </div>
  )
}
export default App
