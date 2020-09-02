import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetLesson } from '../../redux/actions/lesson';
import Markdown from 'react-markdown';
import { CodeBlock } from './Markdown';
import { Loading } from '../../components/index';

import './index.scss';

export default function Lesson() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [lesson, setLesson] = useState({});
  const [_error, setError] = useState(false);
  useEffect(() => {
    if (router.query.c && router.query.id)
      GetLesson(router.query.c, router.query.id)
        .then((res) => {
          setLesson(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
  }, [router]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!_error ? (
            <div className="lesson">
              <div>
                <div className="lesson__title">{lesson.name}</div>
                <div className="lesson__author">
                  <img
                    src="https://itmc-ptithcm.github.io/img/logo.svg"
                    alt="logo8"
                  />
                  InfoTechMediaClub team
                </div>
                <div className="lesson__content">
                  <Markdown
                    source={lesson.content}
                    renderers={{ code: CodeBlock }}
                    plugins={[require('remark-shortcodes')]}
                  />
                </div>
              </div>
            </div>
          ) : (
            <h1 className="lesson__title">Không tìm thấy bài yêu cầu.</h1>
          )}
        </>
      )}
    </>
  );
}
