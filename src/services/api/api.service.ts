import {Storage} from '../storage/storage';

export class ApiService {
  private prefixUrl = 'https://reactnative.dev/';

  private readonly headers: HeadersInit_ = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  private config: RequestInit = {};

  constructor(prefixUrl: string) {
    this.setPrefixUrl(prefixUrl);
  }

  public async get(url: string, auth = true): Promise<any> {
    try {
      const headers = await this.addToken(auth);
      const response = await fetch(this.prefixUrl + url, {
        method: 'GET',
        headers,
      });
      return response.json();
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  public async post(url: string, data: any, auth = true): Promise<any> {
    try {
      const body = JSON.stringify(data);
      const headers = await this.addToken(auth);
      const response = await fetch(this.prefixUrl + url, {
        method: 'POST',
        headers,
        body,
      });
      return response.json();
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  public async put(data: any, auth = true): Promise<any> {
    try {
      const body = JSON.stringify(data);
      const headers = await this.addToken(auth);
      await fetch(this.prefixUrl, {method: 'PUT', body, headers});
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  public async patch(data: any, auth = true): Promise<any> {
    try {
      const body = JSON.stringify(data);
      const headers = await this.addToken(auth);
      await fetch(this.prefixUrl, {method: 'PUT', body, headers});
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  public async delete(data: any): Promise<any> {
    try {
      await fetch(this.prefixUrl, {
        method: 'DELETE',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  private async addToken(auth?: boolean): Promise<HeadersInit_> {
    let headers = this.getHeaders();
    if (auth) {
      const token = await Storage.loadString('TOKEN');
      return {...headers, Authorization: `Bearer ${token}`};
    }
    return headers;
  }

  private getHeaders(): HeadersInit_ {
    return this.headers;
  }

  private setPrefixUrl(prefixUrl: string) {
    this.prefixUrl = prefixUrl;
  }
}
