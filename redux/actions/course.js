import Api from '../../config/Api';

export const GetAllLesson = async (courseId) => {
  try {
    const { data } = await Api.get(`/course/${courseId}/lesson`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const GetDetailLesson = async (courseId) => {
  try {
    const { data } = await Api.get(`/course/${courseId}`);
    return data;
  } catch (err) {
    throw err;
  }
};
