import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  switchLanguage(language: string) {
    // set the language direction
    document.dir = language === 'ar' ? 'rtl' : 'ltr';

    // set the language for translation
    this.translate.use(language);



    const currentLanguage = this.translate.currentLang;
    console.log(currentLanguage)

  }

  
}
