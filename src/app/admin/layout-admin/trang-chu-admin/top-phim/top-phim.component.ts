import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';

@Component({
  selector: 'app-top-phim',
  templateUrl: './top-phim.component.html',
  styleUrls: ['./top-phim.component.scss']
})
export class TopPhimComponent implements OnInit, OnChanges {
  @Input() DS_Phim: PhimAdmin[] = [];
  DS_Phim_Top: PhimAdmin[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.DS_Phim_Top = this.DS_Phim.filter((el, index) => {
      if (index < 5) {
        return el;
      }
    });
  }

}
