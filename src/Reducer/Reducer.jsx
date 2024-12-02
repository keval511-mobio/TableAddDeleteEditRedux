const initial = {
    datas: []
  }

  export const Reducer = (state = initial, action) => {
    switch (action.type) {
      case "ADDING":
        return { ...state, datas: [...state.datas, action.payload] };
      case "REMOVE":
        return { ...state, datas: state.datas.filter((value,id) => value.id !== action.payload) };
      case "EDIT":
        return {
          ...state,
          datas: state.datas.map((value) => 
            value.id === action.payload.id ? { ...value, ...action.payload.updatedData } : value
          ),
        };
      default:
        return state;
    }
  };
  