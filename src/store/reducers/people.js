import * as actionTypes from '../actions';

const initialState = {
  people: []
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
    let newPerson = {
          id: Math.random(), // not really unique but good enough here!
          name: 'Max',
          age: Math.floor( Math.random() * 40 )
      }
      console.log('add in reducer');
      return {
        ...state,
        people: state.people.concat(newPerson)
      }
    case actionTypes.DELETE:
      return {
        ...state,
        people: state.people.filter( person => person.id !== action.personId)
      };
  }
  return state;
}

export default reducer;
