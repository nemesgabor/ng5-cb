import { DataStorageService } from '../shared/data-storage.service';
import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dataStorageService:DataStorageService,
    private authService:AuthService) { }

  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe();
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  }
}
