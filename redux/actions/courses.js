import Api from '../../config/Api';
import { coursesConstant } from '../constant';

export const GetAllCourses = async () => {
  try {
    const { data } = await Api.get(coursesConstant.COURSE);
    return data;
  } catch (err) {
    throw err;
  }
};
