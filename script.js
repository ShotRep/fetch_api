/*
FETCH API or fetch('url' - 1st property, 2nd optional property)
lets us a fake api => https://reqres.in/api/users
optional section(get method, post method, put method)

*/
//1.)
console.log(fetch("https://reqres.in/api/users"))
//we see this returns a promise so we can use asyc await, .then, and .catch

//2.)
fetch("https://reqres.in/api/users").then((res) => console.log(res))
//res = the response object.
//body in out response object contains all the data but we cant see it.
//we need to convert this to JSON to view.

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))

//Fetch always succeeds unless there is no network connectivity so .catch doesn't work the way it should.  We have a work around but easiest handled otherwise.

fetch("https://reqres.in/api/users/13")
  .then((res) => {
    if (res.ok) {
      console.log("Success")
    } else {
      console.log("Not Successful")
    }
  })
  .then((data[0]) => console.log(data[0]))

//Lets POST a new user by using methods in our optional fetch.
//send the data using JSON
fetch("https://reqres.in/api/users/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ragnor",
  }),
})
  .then((res) => {
    return res.json()
  })
  .then((data) => console.log(data))
