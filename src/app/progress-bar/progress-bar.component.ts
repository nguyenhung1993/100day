import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { from } from "rxjs";

@Component({
  selector: "progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = "#ccc";
  @Input() progressColor = "#f00";

  constructor() {
    console.log("contructor", {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }

  ngOnInit() {
    console.log("ngOnInit", {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }

  ngOnChanges() {
    console.log("ngOnChanges", {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
  }
}
