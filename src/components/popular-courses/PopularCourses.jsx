import { SectionHeader } from './../../components'

import "./popular-courses.css";

const PopularCourses = () => {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />
      </div>
    </div>
  )
}

export default PopularCourses