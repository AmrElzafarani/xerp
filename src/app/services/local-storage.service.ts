import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLanguage = (lang: string) => {
    localStorage.setItem("lang", lang)
  }

  getLanguage = () => {
    return localStorage.getItem("lang")
  }
}
