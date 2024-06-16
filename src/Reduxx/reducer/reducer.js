const INIT_STATE = {
  carts: [],
  name:'cart',
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    
    case "ADD_CART": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const newCarts = state.carts.map((item, index) =>
          index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
        );
        return {
          ...state,
          carts: newCarts,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    }

    case "RMV_CART": {
      const data = state.carts.filter((ele) => ele.id !== action.payload);

      return {
        ...state,
        carts: data,
      };
    }

    case "RMV_ONE": {
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qnty > 1) {
        const newCarts = state.carts.map((item, index) =>
          index === itemIndex_dec ? { ...item, qnty: item.qnty - 1 } : item
        );
        return {
          ...state,
          carts: newCarts,
        };
      } else if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter((ele) => ele.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }
      break;
    }

    default:
      return state;
  }
};


