import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PortfolioDataService } from 'src/app/portfolio-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private dataService: PortfolioDataService) { }
  
  habilidades = this.dataService.getHabilidadesByUserId();

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.habilidades, event.previousIndex, event.currentIndex);
  }

}
