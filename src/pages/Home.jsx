import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Getstarted from "../components/Getstarted";
import Graph from "../components/Graph";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Synt from "../components/Synt";

function Home() {
    return ( 
        <div>
            <Navbar/>
            <Intro/>
            <Synt/>
            <Graph/>
            <Experience/>
            <Getstarted/>
            <Footer/>
        </div>
     );
}

export default Home;