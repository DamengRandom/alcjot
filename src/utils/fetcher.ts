async function fetcher(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.info(response, json);
  } catch (error) {
    console.error(error?.message);
  }
}

export default fetcher;
