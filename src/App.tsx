import React from 'react';
import './App.scss';
import PageHeader from "./components/header/PageHeader";
import ContentBlock from "./components/content/ContentBlock";

function App() {
  return (
    <div className="AppWrapper">
        <PageHeader/>
        <ContentBlock/>
    </div>
  );
}

export default App;
