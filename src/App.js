import 'bulma/css/bulma.css';
import './App.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar'
import Footer from './Footer';
import Recipe from './Recipe';


function App() {
    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">ZERO WASTE GOURMET</p>
                    <p className="subtitle">Cook & Make No Waste With Our Recipes </p>
                </div>
            </section>

            <span className="icon">
                <i className="fas fa-home"></i>
            </span>

            <SearchBar />
            <Navbar />
            <Recipe />
            <Footer />

        </div>
    );
}

export default App;