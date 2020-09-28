import { UserSQLite } from './user-sqlite';

describe('UserSQLite', () => {
  it('should create an instance', () => {
    expect(new UserSQLite()).toBeTruthy();
  });
});
