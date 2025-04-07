// this crated for new features
fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'John Doe' }),
  })
    .then(res => res.json())
    .then(data => console.log(data));
  