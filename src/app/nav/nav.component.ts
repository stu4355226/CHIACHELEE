import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  ngOnInit() {
  }
  // isActive = true;
  // lastScrollTop: number = 0;
  // direction: string = "";

  // constructor(lc: NgZone) {
  //   window.onscroll = () => {
  //     let set = window.pageYOffset;
  //     let dir = '';
  //     console.log(window.pageYOffset);
  //     if (window.pageYOffset > 5) {
  //       this.isActive = false;
  //     }else{
  //       this.isActive = true;
  //     }
  //     // if (st > this.lastScrollTop) {
  //     //      console.log('down');
  //     // }else{
  //     //    console.log('up');
  //     // }
  //     this.lastScrollTop = set;
  //     lc.run(() => {
  //       this.direction = dir;
  //     });
  //   }
  // }
}
