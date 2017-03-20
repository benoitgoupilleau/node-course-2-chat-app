const expect = require('expect');
const {Users}= require('./users');

describe('Users', ()=>{
  var users;
  beforeEach(()=>{
    users = new Users();
    users.users=[{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jenny',
      room: 'Node Course'
    },{
      id: '3',
      name: 'Benoit',
      room: 'React Course'
    }
  ]
});

  it('should add new user', ()=>{
    var users = new Users();
    var user={id: '1234', name: 'Benoit', room:'The Office'}
    var resUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', ()=>{
    var userRemoved = users.removeUser('3');
    expect(userRemoved.id).toBe('3');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', ()=>{
    var userRemoved = users.removeUser('127');
    expect(userRemoved).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user',()=>{
    var userFound = users.getUser('2');
    expect(userFound.id).toBe('2');
  });

  it('should not find user', ()=>{
    var userFound= users.getUser('127');
    expect(userFound).toNotExist();
  })

  it('should return names for node course', ()=>{
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Jenny'])
  });

  it('should return names for react course', ()=>{
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Benoit'])
  })
});
