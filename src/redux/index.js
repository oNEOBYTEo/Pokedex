const INITIAL_STATE = {
  name: "",
  isDark: false,
  pokemonsPerPage: 16,
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SET_NAME":
      return{
        ...state,
        name: action.payload
      }
    case "SET_PAGE":
      return{
        ...state,
        pokemonsPerPage: +action.payload
      }
    case "SET_DARK_MODE":
      return{
        ...state,
        isDark: !state.isDark
      }
    default:
      return state;
  }

}

export default reducer;