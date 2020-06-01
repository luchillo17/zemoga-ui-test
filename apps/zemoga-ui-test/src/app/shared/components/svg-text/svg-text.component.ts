import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { memoize, isNil } from 'lodash';

@Component({
  selector: 'zut-svg-text',
  template: `
    <svg [attr.viewBox]="getViewBox(text)">
      <g transform="translate(0,-3)">
        <text fill="white" x="0" y="0">
          <tspan *ngFor="let line of getLines(text)" x="0" dy="1em">
            {{ line }}
          </tspan>
        </text>
      </g>
    </svg>
  `,
  styles: [
    `
      :host {
        display: block;
        font-size: 1rem;
        max-width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTextComponent implements OnInit {
  @Input() text = '';

  @Input() customViewBox;

  @Input() wordWrapCharacters = 20;

  characterSize = 7;
  wordWrapRegex: RegExp;
  constructor() {}

  getLines = memoize((text: string) => {
    return text.match(this.wordWrapRegex);
  });

  ngOnInit(): void {
    this.wordWrapRegex = new RegExp(
      `.{1,${this.wordWrapCharacters}}(\\s|$)|\\S+?(\\s|$)`,
      'g',
    );

    console.log(this.text);
  }

  getViewBox(text) {
    if (!isNil(this.customViewBox)) {
      return this.customViewBox;
    }

    return `0 0 ${this.characterSize * this.wordWrapCharacters} ${
      this.getLines(text).length * 16
    }`;
  }
}
