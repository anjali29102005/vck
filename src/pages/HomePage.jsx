import Header from "../components/Header/Header";

const HomePage =() => {
  return(
    
    <div class="container">
        <div id="home">
          <img src="/image/vck3.png" alt="collage" />
        <h1>welcome to Vivekanand Collage!</h1>
        <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        <h2>Why Choose Vivekanand Collage?</h2>
        <ul type="disc">
            <li><span>Legacy of Excellence:</span>Decades of commitment to quality education. </li>
            <li><span>Experienced Faculty:</span>Learn from renowned experts and passionate educators.</li>
            <li><span>Modern Facilities:</span> Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><span>Holistic Development:</span> Focus on co-curricular activities, sports, and community service.</li>
            <li><span>Strong Placements:</span>Excellent career opportunities with leading companies.</li> 
        </ul>
        <h2> Campus Life & Facilities</h2>
        <div className="image">
        < img src="/image/vck.png" alt="collage" />
        <img src="/image/vck1.jpg.png" alt="collage " />
        </div>
        <div classname="botton">
          <p>Explore our vibrant campus and state-of-the- art facilities designed to enhance your learning experience and personal growth.</p>
        <p>Ready to start your journey with us?</p>
        <button>Explore Courses</button>
        </div>
    </div>
    </div>
  

    
  )
}

export default HomePage;