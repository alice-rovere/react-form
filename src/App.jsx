import Header from "./layout/Header";
import MainSection from "./layout/MainSection";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
