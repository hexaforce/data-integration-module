import { GET } from './Rest'

export class Greeter {
  greet(to: string): void {
    console.log(`Hello ${to}`)
  }
}

export const Aaa = async (): Promise<any> => {
  const response = await GET('/get');
  if (!response.ok) {
    return await response.text()
  }
  const result = await response.json();
  return result
}
