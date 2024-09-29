const submitData = async () => {
  const response = await fetch('https://your-api-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      itemId: '123',
      name: 'Example Item'
    })
  });
  
  const data = await response.json();
  console.log(data);
};
