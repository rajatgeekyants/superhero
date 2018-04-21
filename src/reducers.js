import Char from './hero';

const initialState = {
  char: Char,
  searchTerm: '',
};

export default function char(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      const {searchTerm} = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        char: searchTerm
          ? Char.filter(
              char =>
                char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            )
          : Char,
      };

    default:
      return state;
  }
}
