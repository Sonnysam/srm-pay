import { AuthAction } from "../actions/AuthAction";

const AuthReducer = (
  state = {
    name: "",
    email: null,
    password: null,
    confirmPassword: null,
    phoneNo: null,
    churchName: null,

    userToken: false,
    uid: null,
    profilePhoto: null,
    userInfo: null,
    userType: "user",
  },
  action
) => {
  switch (action.type) {
    case AuthAction.USERPROFILE:
      switch (action.payload.type) {
        case "name":
          state.name = action.payload.value;
          break;
        case "email":
          state.email = action.payload.value;
          break;
        case "password":
          state.password = action.payload.value;
          break;
        case "confirmPassword":
          state.confirmPassword = action.payload.value;
          break;
        case "profilePhoto":
          state.profilePhoto = action.payload.value;
          break;
        case "phoneNo":
          state.phoneNo = action.payload.value;
          break;
        case "churchName":
          state.churchName = action.payload.value;
          break;
      }

      return {
        ...state,
      };
    case AuthAction.LOGIN:
      state.userToken = action.userToken;
      state.userInfo = action.userInfo;
      state.phoneNo = action.userInfo.PhoneNo;
      state.uid = action.userInfo.Uid;
      state.userType = action.userInfo.userType;

      state.name = action.userInfo.UserName;
      state.email = action.userInfo.Email;

      return {
        ...state,
      };
    case AuthAction.USER_TYPE:
      if (action.payload) {
        state.userType = action.payload;
      }

      state.userToken = action.userToken;
      state.userInfo = action.userInfo;

      return {
        ...state,
      };
    case AuthAction.GET_ALL_USERS:
      state.allUsers = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AuthReducer;
