// write your createStore function here
function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state
  }

  return {
    getState,
    dispatch
    }
}

function candyReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, state.count + 1];

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};


// dispatch should take in an action, update the state using the reducer, and call the render function.
// Once you've written createStore, to everything working, you'll need two more things at the end of index.js:

// Notice that in the provided render function, a variable named store is called. Define a variable named store and assign it to whatever is returned by the createStore function you've written when it is passed the candyReducer function.
// // Initialize your state using a dispatch call to the reducer.
let store = createStore(reducer)
store.dispatch({ type: '@@INIT '});

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch