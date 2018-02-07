
export default function Insertidea(values,useruuid)
  {
    const input = {
      ...values,
      uuid: useruuid
    };
    console.log(input);

     // On submit of the form, send a POST request with the data to the server.
     return fetch('/createideanew', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          },
         body: JSON.stringify(input)
       })
       .then(response => response.json())
       .then(data => {
         if (data.result === "success") {
           return true;// dispatch a success
         } else {
           console.warn(data);
           return false;
         }
       });
  }

export function retrieveIdeas () {
  console.log("function launched");
  return fetch('/viewideasall', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.body);
      return data;
    });
}
