// export const VITE_API_ENDPOINT = process.env.REACT_APP_VITE_API_ENDPOINT;
// export const VITE_API_RETRY_COUNT = Number(process.env.REACT_APP_VITE_API_RETRY_COUNT);
// export const VITE_API_RETRY_DELAY = Number(process.env.REACT_APP_API_RETRY_DELAY_M);

export const VITE_API_ENDPOINT = 'https://httpbin.org'
export const VITE_API_RETRY_COUNT = 3
export const VITE_API_RETRY_DELAY = 1500

// -------------------------------------------------------------
// --- Common --------------------------------------------------
// -------------------------------------------------------------
const delay = (time: number) => {
  console.warn(`retry again after ${time}ms`)
  return new Promise((resolve) => setTimeout(resolve, time))
}

const retry = async (url: string, options: any, n: number): Promise<Response> => {
  try {
    return await fetch(url, options).then((response) => {
      if (!response.ok) throw response
      return response
    })
  } catch (response: any) {
    if (n === 1) {
      return response
    }
    console.warn(`recover!! ${url}`)
    await delay(VITE_API_RETRY_DELAY)
    return await retry(url, options, n - 1)
  }
}

const header = async () => {
  return {
    'Content-Type': 'application/json',
    // Authorization: `${(await Auth.currentSession())
    //   .getIdToken()
    //   .getJwtToken()}`,
    // "x-e2e": TEST_DB,
    // "X-CSRF-Token": await csrf(),
  }
}

// -------------------------------------------------------------
// --- METHOD --------------------------------------------------
// -------------------------------------------------------------
export const GET = async (path: string): Promise<Response> => {
  return retry(
    VITE_API_ENDPOINT + path,
    {
      method: 'GET',
      headers: await header(),
    },
    VITE_API_RETRY_COUNT,
  )
}

export const POST = async (path: string, body: any) => {
  return retry(
    VITE_API_ENDPOINT + path,
    {
      method: 'POST',
      headers: await header(),
      body: JSON.stringify(body),
    },
    VITE_API_RETRY_COUNT,
  )
}

export const PUT = async (path: string, body: any) => {
  return retry(
    VITE_API_ENDPOINT + path,
    {
      method: 'PUT',
      headers: await header(),
      body: JSON.stringify(body),
    },
    VITE_API_RETRY_COUNT,
  )
}

export const DELETE = async (path: string) => {
  return retry(
    VITE_API_ENDPOINT + path,
    {
      method: 'DELETE',
      headers: await header(),
    },
    VITE_API_RETRY_COUNT,
  )
}
