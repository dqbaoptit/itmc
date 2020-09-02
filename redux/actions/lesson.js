import Api from '../../config/Api';

export const GetLesson = async (courseId, lessonId) => {
  try {
    const { data } = await Api.get(`/course/${courseId}/lesson/${lessonId}`);
    return data;
  } catch (err) {
    throw err;
  }
};
