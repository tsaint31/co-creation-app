export default function testsActions(dispatch){
  return {
    retrieveTests: () => {
      return fetch('/viewtestsall', {
          method: 'GET',
        })
        .then(response => {
          console.log(response);
          response.json();
        })
        .then(data => {
          console.log(data);
          dispatch({ type: "RETRIEVE_TESTS", data: data })
        });
    }
  }
}
