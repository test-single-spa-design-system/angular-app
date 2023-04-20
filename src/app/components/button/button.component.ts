// @ts-nocheck
import { Component, Input } from '@angular/core';

import { colors } from "@spms/styleguide";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() spanColor: string = '';
  listColors: System.Module;

  constructor() {
    const test = System.import('@spms/styleguide');

    test
      .then((u) => {
        console.log('u', u)
        this.listColors = u.colors;

        this.spanColor = u.colors.secundary;
      })
      .catch(function (err) {
        console.error(err);
      });
  }
}
