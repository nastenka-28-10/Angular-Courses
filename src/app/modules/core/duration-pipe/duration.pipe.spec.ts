import { DurationPipe } from 'app/modules/core/duration-pipe/duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
