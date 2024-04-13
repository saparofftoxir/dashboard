export const initialStateUser = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser:JSON.parse(localStorage.getItem("currentUser") || null),
};
export const userReduser = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return (state = {
        ...state,
        users: [...state.users, action.payload],
      });
    case "SET_CURRENTUSER":
      return (state = {
        ...state,
        currentUser: action.payload,
      });
  } 
};
