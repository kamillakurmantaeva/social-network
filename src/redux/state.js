let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 0 },
      { id: 2, message: "It's my first post", likesCount: 23 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Oscar1' },
      { id: 2, name: 'Oscar2' },
      { id: 3, name: 'Oscar3' },
      { id: 4, name: 'Oscar4' },
      { id: 5, name: 'Oscar5' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello!' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo!' },
    ],
  },
};

export default state;
