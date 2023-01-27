import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {SearchBookPage} from "./layouts/SearchBooksPage/SearchBookPage";


export const App = () => {
  return (
      <div>
          <Navbar />
          {/* <HomePage /> */}
          <SearchBookPage />
          <Footer />

      </div>
  );
}

