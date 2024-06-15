import { BrowserRouter, Routes, Route } from "react-router-dom"
import Apply from "./pages/Apply";
import UserContact from "./components/forms/applyLoan/UserContact";
import PersonalInformation from "./components/forms/applyLoan/PersonalInformation";
import Work from "./components/forms/applyLoan/Work";
import LoanDetails from "./components/forms/applyLoan/LoanDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apply />} >
          <Route path="1" element={<UserContact />} />
          <Route path="2" element={<PersonalInformation />} />
          <Route path="3" element={<Work />} />
          <Route path="4" element={<LoanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App