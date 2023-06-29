

console.log(process.env);
function helloNpm() {
  return "hello NPM"
}

module.exports = helloNpm

// export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
// export const TEST_DB = process.env.REACT_APP_TEST_DB;

// const RETRY_COUNT = 1;

// // export const Now = () => {
// //   return new Date().toLocaleString({ timeZone: "Asia/Tokyo" });
// // };

// // -------------------------------------------------------------
// // --- Common --------------------------------------------------
// // -------------------------------------------------------------
// export const GET = async (path: string): Promise<Response> => {
//   return retry(
//     API_ENDPOINT + path,
//     {
//       method: "GET",
//       headers: await header(),
//     },
//     RETRY_COUNT
//   );
// };

// export const POST = async (path: string, body: any): Promise<Response> => {
//   return retry(
//     API_ENDPOINT + path,
//     {
//       method: "POST",
//       headers: await header(),
//       body: JSON.stringify(body),
//     },
//     RETRY_COUNT
//   );
// };

// export const PUT = async (path: string, body: any): Promise<Response> => {
//   return retry(
//     API_ENDPOINT + path,
//     {
//       method: "PUT",
//       headers: await header(),
//       body: JSON.stringify(body),
//     },
//     RETRY_COUNT
//   );
// };

// export const DELETE = async (path: string) => {
//   return retry(
//     API_ENDPOINT + path,
//     {
//       method: "DELETE",
//       headers: await header(),
//     },
//     RETRY_COUNT
//   );
// };

// const delay = (time: number) => {
//   console.warn(`retry again after ${time}ms`);
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// const retry = async (url: string, options: any, n: number): Promise<Response> => {
//   try {
//     return await fetch(url, options).then((response) => {
//       if (!response.ok) throw response;
//       return response;
//     });
//   } catch (response: any) {
//     if (n === 1) {
//       return response;
//     }
//     console.warn("recover!! " + url);
//     await delay(1500);
//     return await retry(url, options, n - 1);
//   }
// };

// const header = async () => {
//   return {
//     "Content-Type": "application/json",
//     // // Authorization: `${(await Auth.currentSession())
//     // //   .getIdToken()
//     // //   .getJwtToken()}`,
//     // "x-e2e": TEST_DB,
//     // "X-CSRF-Token": await csrf(),
//   };
// };

