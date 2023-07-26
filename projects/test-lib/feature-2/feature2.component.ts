import {Component} from "@angular/core";
import {Feature1Component} from "@test-lib/feature-1";

@Component({
  selector: 'feature2',
  template: '<div>Feature 2</div>',
  standalone: true,
  imports: [Feature1Component]
})
export class Feature2Component {
  constructor() {
  }
}
