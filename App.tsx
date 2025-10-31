import React, { useState, useCallback } from "react";
import { Page } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContextPage from "./pages/ContextPage";
import DiaryPage from "./pages/DiaryPage";
import HanoiPage from "./pages/HanoiPage";
import AnalysisPage from "./pages/AnalysisPage";
import TourPage from "./pages/TourPage";
import LibraryPage from "./pages/LibraryPage";
import GamePage from "./pages/GamePage";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("HOME");

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  // Scroll progress bar
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "HOME":
        return <HomePage navigateTo={navigateTo} />;
      case "CONTEXT":
        return <ContextPage />;
      case "DIARY":
        return <DiaryPage />;
      case "HANOI":
        return <HanoiPage />;
      case "ANALYSIS":
        return <AnalysisPage />;
      case "TOUR":
        return <TourPage />;
      case "LIBRARY":
        return <LibraryPage />;
      case "GAME":
        return <GamePage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 font-sans relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images2.thanhnien.vn/Uploaded/hoangnam/2022_12_15/11d-4174.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <Header navigateTo={navigateTo} currentPage={currentPage} />
        <main className="container mx-auto px-4 py-12 md:py-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
