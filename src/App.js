import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarTop } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Spinner } from "react-bootstrap";
import { About } from "./components/About/About";
import { Cv } from "./components/Cv/Cv";
import { Footer } from "./components/Footer/Footer";
import { saveAs } from 'file-saver';
import CV from "./components/Cv/cv.pdf"

function App() {
  const [lang, setLang] = useState({});
  const [select, setSelect] = useState("hu");
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [download, setDownload] = useState(false);

  const downloadPdf = async () => {
    setDownload(true);
    const pdfBlob = await fetch(CV).then((response) => response.blob());
    saveAs(pdfBlob, 'cv.pdf');
    setDownload(false);
};

  useEffect(() => {
    const fetchLang = async () => {
      const response = await fetch(
        "https://mycv-a245a-default-rtdb.firebaseio.com/lang.json"
      );
      const data = await response.json();
      const selectedLang = data[select];
      if (selectedLang) {
        setLang(selectedLang);
      }
      setFetchCompleted(true);
    };

    fetchLang();
  }, [select]);

  const changeHandler = (e) => {
    setSelect(e.target.value);
  };

  if (!fetchCompleted || download) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  }

  return (
    <div className="App">
      <NavbarTop onSelectHandler={changeHandler} lang={lang} />
      <Home lang={lang} onDownload={downloadPdf} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Cv lang={lang}  onDownload={downloadPdf}/>
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
