const gqlUrl = 'http://localhost:9000';

async function fetchGreeting() {
  const res = await fetch(gqlUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query{
          greeting
        }
      `
    })
  });

  const { data } = await res.json();
  return data;
};

fetchGreeting().then(({ greeting }) => {
  const title = document.querySelector('h1');
  title.textContent = greeting;
});
