import { expect } from 'chai';
import { mutations } from 'store/store.js';

const { SET_NEW_USER, CHANGE_FLAG_TRUE } = mutations;

describe('Example first test', () => {
  it('should pass this example test', () => {
    expect(true).to.eql(true);
  });
});

describe('Mutation SET_NEW_USER', () => {
  it('SET_NEW_USER', () => {
    // mock state
    const state = { users: [] };
    const user = {
      name: 'Jan',
      surname: 'Kowalski',
      email: 'kowalski@gmail.com',
      role: 'Guest',
      accepted: 'Enable',
      description: 'Description',
      phone: '667453234',
      position: 'Position',
      office: 'Office 1',
    };
    expect(state.users.length).to.equal(0);
    // apply mutation
    SET_NEW_USER(state, user);
    expect(state.users.length).to.equal(1);
    // assert result
    expect(state.users[0].name).to.equal('Jan');
    // expect(user.surname).to.equal('Kowalski');
  });
});

describe('Mutation CHANGE_FLAG_TRUE', () => {
  it('CHANGE_FLAG_TRUE', () => {
    const state = { flag: false };
    CHANGE_FLAG_TRUE(state);
    expect(state.flag).to.equal(true);
  });
});

