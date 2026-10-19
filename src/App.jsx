import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Menu from "./pages/Menu";
import Footer from "./components/ui/Footer";
import AboutUs from "./components/Home/AboutUs";
import AboutusPage from "./pages/Aboutus";

function App() {
  return (
    <Router>
      <Navbar />
      <PageTransitions />
      <Footer />
    </Router>
  );
}

function PageTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/contactus"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contactus />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutusPage />
            </motion.div>
          }
        />
        <Route
          path="/menu"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Menu />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
