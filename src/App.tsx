import React, { useState } from "react";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Booklist from "./components/Books/Booklist/Booklist";
import { SortBy } from "./components/UI/Toolbar/types";
import QueryProvider from "./providers/QueryProvider/QueryProvider";
import Navbar from "./components/UI/Navbar/Navbar";
import MainContent from "./components/Wrappers/MainContent/MainContent";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy>("author");

  return (
    <QueryProvider>
      <Navbar />
      <Toolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <MainContent>
        <Booklist searchQuery={searchQuery} sortBy={sortBy} />
      </MainContent>
    </QueryProvider>
  );
};

export default App;
