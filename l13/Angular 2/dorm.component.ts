import { Component } from '@angular/core';

@Component({
  selector: 'dorm-list',
  template: `<h2>Dorm List</h2>
  <ul>
      <li *ngFor="let dorm of dorms">
        {{dorm.name}} : {{dorm.capacity}}
      </li>
    </ul>`,
})
export class DormList  { dorms=[{name: 'FloMo',capacity: 470},
                      {name: 'Wilbur', capacity: 700 },
					  {name: 'Stern', capacity: 600},
					  {name: 'Lag', capacity: 400}]; }
