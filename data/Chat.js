export default {
  id: '1',
  users: [{
    id: 'u1',
    name: 'Vadim',
    imageUri: "https://images.unsplash.com/photo-1584563852594-9b5024f4c62e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  }, {
    id: 'u2',
    name: 'Lukas',
    imageUri: 'https://images.unsplash.com/photo-1625785053567-c2235913b079?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  }],
  messages: [{
    id: 'm1',
    content: 'How are you, Lukas!',
    createdAt: '2020-10-10T12:48:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm2',
    content: 'I am good, good',
    createdAt: '2020-10-03T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm3',
    content: 'What about you?',
    createdAt: '2020-10-03T14:49:40.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm4',
    content: 'Good as well, preparing for the stream now.',
    createdAt: '2020-10-03T14:50:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm5',
    content: 'How is your uni going?',
    createdAt: '2020-10-03T14:51:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm6',
    content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
    createdAt: '2020-10-03T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm7',
    content: 'Big Data is really interesting. Cannot wait to go through all the material.',
    createdAt: '2020-10-03T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }]
}