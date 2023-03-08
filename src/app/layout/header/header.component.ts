import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  languages = [
    { label: 'English', value: 'en' },
    { label: 'العربية', value: 'ar' }
  ];
  selectedLanguage = 'en';

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {

  }

  switchLanguage() {
    this.languageService.switchLanguage(this.selectedLanguage);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


}
