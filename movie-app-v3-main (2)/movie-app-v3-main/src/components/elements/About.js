// About
import { Link } from 'react-router-dom';

const About = () => (

  <section className="about-section">

    <Link to={'/'} className="go-back">&#5176; Back</Link>

    <h2>About Filmdex</h2>
    <div className="about-section-wrapper">
      <p><b>Filmdex</b> is a movie database site hoping to satisfy the cinema needs of movie
        buffs. Whether you are planning to watch a new upcoming release, or want to
        learn more about solid block-buster classics, Filmdex aims to provide a
        beautiful and seamless experience for all.<br></br>
        Please feel free to browse through our selections. If there are any movies that
        interest you, go ahead and add them to your Favorites.</p>
    </div>

    <div class="tmdb-logo">
      <a href="https://www.themoviedb.org/documentation/api"><img src="./images/tmdb-logo.png" alt="TMDB Logo" className="no-hover"></img></a>
    </div>
    <div className="about-section-wrapper">
      <p>This web application uses the <a href="https://www.themoviedb.org/documentation/api">TMDb API</a> but is not endorsed or certified by TMDb. <br></br> For educational purposes only.</p>
    </div>

    <h3>About the Team</h3>
    <div className="about-section-wrapper">
      <p>Created by <a href="https://mbui.bcitwebdeveloper.ca/">Mina Bui</a> and <a href="https://vnguyen.bcitwebdeveloper.ca/">Vinson Nguyen</a>. Made for the BCIT <a href="https://bcitwebdeveloper.ca/">Technical Web Designer</a> Program.</p>
    </div>

  </section>

);

export default About; 