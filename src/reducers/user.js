const initialState = {
  username: ""
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}

export default user;