import { useEffect, useState } from "react";
import {
  TopBar,
  Navbar,
  Breadcrumb,
  Footer,
  CourseBox,
  Pagination
} from "./../../components";

import "./courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([])


  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.map((course) => (
                  <CourseBox {...course} key={course._id} />
                ))}
              </div>
            </div>
          </div>

          <Pagination
            items={courses}
            itemsCount={3}
            pathname="/courses"
            setShownCourses={setShownCourses}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Courses