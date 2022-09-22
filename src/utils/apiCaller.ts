const sharedOptions = {
  mode: 'cors',
  referrerPolicy: 'no-referrer',
};

const successResponser = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const json = await response.json();

  return json;
};

const errorResponser = (error: Error) => {
  console.error(error?.message);

  return error?.message;
};

const responser = async (url: string, options: any) => {
  try {
    await successResponser(url, options);
  } catch (error) {
    errorResponser(error);
  }
};

async function poster(url: string, data: any) {
  const options = {
    ...sharedOptions,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  await responser(url, options);
}

async function getAccessToken() {
  const currentUserId = localStorage.getItem('userId');

  if (currentUserId)
    return (
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/token?id=${currentUserId}`
      )
    ).json();

  return undefined;
}

export { getAccessToken, poster };
