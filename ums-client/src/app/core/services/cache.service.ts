import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const maxAge = 100000;
interface ICachedResponse {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache = new Map<string, ICachedResponse>();

  constructor() {
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - maxAge;

    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.url;
    const cachedResponse: ICachedResponse = { url, response, lastRead: Date.now() };
    this.cache.set(url, cachedResponse);
  }

  clear(): void {
    this.cache = new Map<string, ICachedResponse>();
  }
}
