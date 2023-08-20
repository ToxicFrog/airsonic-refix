export interface Config {
  serverUrl: string
}

const env = (window as any).env

export const config: Config = {
  serverUrl: 'https://music.ancilla.ca'
}
