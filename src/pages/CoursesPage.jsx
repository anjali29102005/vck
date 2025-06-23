import Header from "../components/Header/Header";

const CoursesPage =() => {
  return(
    
<div className="container">
        <div id="courses">
        <h1>Our Academic Programs</h1>
        <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
        <h2>Undergraduate Programs(UG)</h2>
        <ul type="disc">
            <li><span>Bachelor of Science(B.sc.)</span></li>
             <ul type="disc">
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
            </ul>   
            </ul>
        <ul type="disc">
            <li><span>Bachelor of Commerce (B.Com)</span></li>
            <ul type="disc">
                <li>Accounting & Finance (3 years)</li>
                <li>Banking & Insurance (3 years)</li>
            </ul>
        </ul>
        <ul type="disc">
            <li><span>Bachelor of Arts (B.A.)</span></li>
        <ul type="disc">
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
        </ul>
        <h2>Postgraduate Programs (PG)</h2>
        <ul type="disc">
            <li>Master of Science (M.Sc.)</li>
        <ul type="disc">
            <li>Computer Science (2 years)</li>
            <li>Information Technology (2 years)</li>
        </ul>
        <li>Master of Commerce (M.Com) (2 years)</li>
        <li>Master of Arts (M.A.) (2 years)</li>
        </ul>
        <h3>Specialized & Vocational Courses</h3>
        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
        <p>Explore detailed syllabi and admission criteria on our Admissions page.</p> 
        <button>Inquire About Courses</button>
        </div>  
        

    </div>
  )
}

export default CoursesPage;