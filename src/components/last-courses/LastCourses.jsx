import { CourseBox, SectionHeader } from './../../components'

import "./last-courses.css";

const LastCourses = () => {
  return (
    <div class="courses">
      <div class="container">
        <SectionHeader
          title="جدیدترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت"
          btnTitle="تمامی دوره ها"
          btnHref="/courses"
        />

        <div class="courses-content">
          <div class="container">
            <div class="row">
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCourses