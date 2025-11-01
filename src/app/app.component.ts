import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tree :any= {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };

  methodToGetTreeStructure(key:any):any{
    return this.tree[key] || [];
  }
}
