const sharedOptions = {
  mode: 'cors',
  // cache: 'no-cache',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

const successResponser = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const json = await response.json();

  return json;
};

const errorResponser = (error: Error) => {
  console.error(error?.message);

  return error;
};

const responser = async (url: string, options: any) => {
  try {
    return await successResponser(url, options);
  } catch (error) {
    return errorResponser(error);
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

  return responser(url, options);
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
