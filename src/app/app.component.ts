import { Component, HostListener, OnInit, NgZone, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // host: {
  //   '(window:scroll)': 'onWindowScroll($event)'
  // }
})
export class AppComponent {
  title = 'app';
  // @HostListener('window:scroll', ['$event'])
  // public onWindowScroll(event: Event): void {
  //   console.log('scrolled');
  // }

  // isActive: boolean = true;
  // lastScrollTop: number = 0;
  // direction: string = "";

  // constructor(lc: NgZone) {
  //   window.onscroll = () => {
  //     let set = window.pageYOffset;
  //     let dir = '';
  //     console.log(window.pageYOffset);
  //     if(window.pageYOffset < 5){
  //       this.isActive = true;
  //     }
  //     // if (st > this.lastScrollTop) {
  //     //      console.log('down');
  //     // }else{
  //     //    console.log('up');
  //     // }
  //     this.lastScrollTop = set;
  //     lc.run(()=>{
  //       this.direction = dir;
  //     });
  //   }
  // }

  ngOnInit() {
  }

  // public onWindowScroll(event: Event): void {
  //   console.log('scrolled');
  // }
}
