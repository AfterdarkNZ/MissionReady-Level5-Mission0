import { BrowserRouter as Router, Link, BrowserRouter } from "react-router-dom";
import "./App.css";

// Search input field - add search functionality here
function SearchForm() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
    </form>
  );
}

// Lower section images container functionality
function ImageContainer({ link, imageUrl, caption }) {
  return (
    <Link to={link}>
      <div className="image-container" onClick="handleClick()">
        {/* display the image from url dynamically */}
        <img src={imageUrl} alt="image" />
        {/* display the image caption dynamically */}
        <div className="caption">{caption}</div>
      </div>
    </Link>
  );
}

// layout of the page
function App() {
  return (
    <div className="body">
      {/* header section of page */}
      <header className="header">
        <div className="header-title">
          <h1>Join the Digital Revolution</h1>
        </div>

        <div className="button-container">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>

      {/* upper main section of page with search container */}
      <main>
        <div className="upper-section">
          <img src="" alt="" />
          <div className="search-container">
            <SearchForm />
            <div className="search-field">
              <button className="search-button">
                {/* Using a non-breaking space to create a space between icon and text */}
                <i class="fa-solid fa-magnifying-glass"></i>&nbsp;Search
              </button>
            </div>
          </div>
        </div>

        {/* lower main section of page */}
        {/* Using BrowserRouter to set up the images that will navigate to other component pages */}
        <div className="lower-section">
          <BrowserRouter>
            <ImageContainer
              link="/page1"
              imageUrl="https://as2.ftcdn.net/v2/jpg/06/15/02/95/1000_F_615029500_TGSXZWP0AiZWDGj0OnnQ2bhaRTvLcsZd.jpg"
              caption="Cutting Edge Technology"
            />

            <ImageContainer
              link="/page2"
              imageUrl="https://as2.ftcdn.net/v2/jpg/06/15/02/95/1000_F_615029501_dQA6ptDmkRmxZXSc4jaJtnFgccwnyCx8.jpg"
              caption="Global Innovations"
            />

            <ImageContainer
              link="/page3"
              imageUrl="https://as1.ftcdn.net/v2/jpg/07/71/46/76/1000_F_771467648_6oQnjenGqqsBzMa6TSvFkeNeSvTE9wso.jpg"
              caption="What the Future Holds"
              onclick="handleClick()"
            />
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
