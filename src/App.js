import DesktopPattern from "./components/DesktopPattern";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";

function App() {

  return (
    <>
      <DesktopPattern />
      <div className="container">
        <main>
          <Header />
          <div className="contents">
            <h1 className="title">Order Summary</h1>
            <p className="paragraph">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <Subscribe />
            <div className="btns">
              <button className="payment">Proceed to Payment</button>
              <button className="cancel">Cancel Order</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
