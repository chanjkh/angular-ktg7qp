import { Component } from '@angular/core';
import { SeriesLabels } from "@progress/kendo-angular-charts";
import { Element, Group, Path, geometry, Rect, Text } from "@progress/kendo-drawing";

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-series-item type="bar" [stack]="true" [data]="[10, 20, 30, 14]" [labels]="seriesLabels"\>
          </kendo-chart-series-item>
          <kendo-chart-series-item type="bar" [data]="[10, 1, 70, 20]" [labels]="seriesLabels">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="bar" [data]="[10, 30, 20, 9]" [labels]="seriesLabels">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="bar" [data]="[29, 71, 30, 44]" [labels]="seriesLabels">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
  public seriesLabels: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    font: "bold 16px Arial, sans-serif",
    position: "auto",
    visual: function(e) {
      const defaultLabel = e.createVisual();
      const position = e.rect.topLeft();
      const index = e.series.index;
      if (index%2 == 1) {
        position.y -= 20;
        const label = new Text(e.text, position, {font: "bold 16px Arial, sans-serif"});
        const group = new Group();
        group.append(label);
        return group;
      } else {
        const group = new Group();
        group.append(defaultLabel);
        return group;
      }
    }
  };
}