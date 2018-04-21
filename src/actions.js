export default function searchTermChanged(searchTerm) {
  return {
    type: 'SEARCH_INPUT_CHANGED',
    payload: {searchTerm},
  };
}
