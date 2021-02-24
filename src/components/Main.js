import React from "react";
import "../stylesheets/layout/_page.scss";
import CardPreview from "./CardPreview";
import Form from "./Form";
function Main() {
  return (
    <div className="bg__container">
      <main className="main--flex">
        <CardPreview />
        <Form />
      </main>
    </div>
  );
}

export default Main;