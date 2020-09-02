import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navigation, PriceCard, Loading } from '../../components/index';
import { GetAllCourses } from '../../redux/actions/courses';

import './index.scss';

export default function Courses() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetAllCourses()
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Navigation />
      <div className="courses">
        <div className="courses__cards">
          {courses.map((item) => (
            <div key={item._id}>
              <PriceCard
                type={3}
                name={item.name}
                level={item.level}
                desc={item.description}
                onClick={() => router.push(`/courses/${item._id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
