import React, { useState, useEffect } from "react";
import { Page } from "../types";

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
}

const navItems: { page: Page; label: string }[] = [
  { page: "HOME", label: "Trang Chủ" },
  { page: "CONTEXT", label: "Bối Cảnh" },
  { page: "DIARY", label: "Nhật Ký" },
  { page: "HANOI", label: "Hà Nội" },
  { page: "ANALYSIS", label: "Giải Mã" },
  { page: "TOUR", label: "Trải Nghiệm" },
  { page: "LIBRARY", label: "Thư Viện" },
];

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const NavLink: React.FC<{
    page: Page;
    label: string;
    tooltip: string;
    isMobile?: boolean;
  }> = ({ page, label, tooltip, isMobile = false }) => {
    const commonClasses =
      "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-400";
    const desktopClasses = `px-4 py-2 rounded-lg text-sm relative overflow-hidden ${
      currentPage === page
        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30"
        : "text-slate-300 hover:bg-slate-700/50 hover:text-amber-400 hover:shadow-md"
    }`;
    const mobileClasses = `text-xl py-4 rounded-lg w-full text-center ${
      currentPage === page
        ? "bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg"
        : "text-slate-300 hover:text-amber-400 hover:bg-slate-800/50"
    }`;

    const button = (
      <button
        onClick={() => {
          navigateTo(page);
          setIsMenuOpen(false);
        }}
        className={`${commonClasses} ${
          isMobile ? mobileClasses : desktopClasses
        }`}
        aria-current={currentPage === page ? "page" : undefined}
      >
        {label}
      </button>
    );

    if (isMobile) {
      return button;
    }

    return (
      <div className="relative group flex items-center">
        {button}
        <div
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-3 py-1.5 bg-slate-900 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10"
        >
          {tooltip}
          <div className="absolute w-2 h-2 bg-slate-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="scroll-progress" id="scroll-progress"></div>
      <header className="glass-effect sticky top-0 z-[60] shadow-2xl border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => navigateTo("HOME")}
                className="text-white font-bold text-xl tracking-tight transition-all duration-300 flex items-center gap-3 hover:scale-105 group"
              >
                <div className="relative w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/50 transition-all">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14.5 9.5H22L16 14L18.5 22L12 17L5.5 22L8 14L2 9.5H9.5L12 2Z"
                      fill="#FFD700"
                      stroke="#FFA500"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <span className="gradient-text group-hover:text-amber-300 transition-colors">
                  HÀ NỘI 1972
                </span>
              </button>
            </div>

            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <NavLink key={item.page} {...item} />
                ))}
              </div>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 h-10 w-10 flex flex-col justify-center items-center"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1.5">
                  <span
                    className={`block w-6 h-0.5 bg-white rounded-full transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white rounded-full transition duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white rounded-full transform transition duration-300 ease-in-out ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      <nav
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-slate-900 shadow-2xl z-50 transform transition-transform ease-in-out duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink key={item.page} {...item} isMobile={true} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
