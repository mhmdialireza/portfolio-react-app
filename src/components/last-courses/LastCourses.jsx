import { useEffect, useState } from 'react';
import { CourseBox, SectionHeader } from './../../components'

import "./last-courses.css";

const LastCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);

  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref="courses/1"
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.splice(0, 6).map((course) => (
                  <CourseBox {...course} key={course._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastCourses