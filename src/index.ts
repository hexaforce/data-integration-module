


fetch('https://api.github.com/orgs/nodejs')
  .then(response => response.json())
  .then(data => {
    console.log(data) // result from `response.json()` above
  })
  .catch(error => console.error(error))