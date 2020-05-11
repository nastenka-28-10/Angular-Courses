import { FilterByCourseNamePipe } from 'app/modules/courses-page/filter-by-course-name-pipe/filter-by-course-name.pipe';

describe('FilterByCourseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCourseNamePipe();
    expect(pipe).toBeTruthy();
  });
});
