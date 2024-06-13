export const saveToLocalStorage = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
    return result;
  };
  
  export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Could not load state', e);
      return undefined;
    }
  };
  