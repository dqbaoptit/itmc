import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { GetAllLesson, GetDetailLesson } from '../../redux/actions/course';
import { Loading, Lesson } from '../../components/index';
import './index.scss';
export default function Course() {
  const router = useRouter();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const ID = router.query.id;
  useEffect(() => {
    if (ID) {
      GetAllLesson(ID)
        .then((res) => {
          setLessons(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));

      GetDetailLesson(ID)
        .then((res) => {
          setCourse(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [ID]);
  return (
    <>
      {loading && <Loading />}
      <div className="course">
        <div className="course__header">
          <div className="course__header__name">{course.name}</div>
          <div className="course__header__desc">{course.description}</div>
          <div className="course__header__author">
            Information Technoly Media Club
          </div>
        </div>
        <div className="course__lesson">
          {lessons.map((item) => (
            <div key={item._id}>
              <Lesson
                title={item.name}
                onClick={() => router.push(`/l/${item._id}?c=${course._id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
