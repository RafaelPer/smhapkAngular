import { ComodoSQLite } from './comodo-sqlite';

describe('ComodoSQLite', () => {
  it('should create an instance', () => {
    expect(new ComodoSQLite()).toBeTruthy();
  });
});
