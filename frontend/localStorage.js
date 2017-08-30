export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {coords: [], modalOpened: false, showDetailed: false, data: []};
    }
    let state = JSON.parse(serializedState);
    return Object.assign({}, state, {data: [], modalOpened: false, showDetailed: false,});
  } catch (err) {
    return {coords: [], modalOpened: false, showDetailed: false, data: []};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const clearState = () => {
  serializedState = null;
};
