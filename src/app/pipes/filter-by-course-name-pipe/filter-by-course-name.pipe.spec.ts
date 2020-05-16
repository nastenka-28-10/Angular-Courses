import { FilterByCourseNamePipe } from 'app/pipes/filter-by-course-name-pipe/filter-by-course-name.pipe';

describe('FilterByCourseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCourseNamePipe();
    expect(pipe).toBeTruthy();
  });
});
