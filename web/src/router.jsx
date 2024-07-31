import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { AgendeOnline } from "./pages/agendar/agendar";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendeOnline" element={<AgendeOnline/>}/>
      </Routes>
    </BrowserRouter>
  )
}
