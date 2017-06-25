import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //destroy fullpage object in the case that initial fullPage object more than one time while switch pages. 
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
    //footer settings
    $('footer').removeClass("footer");
    $('footer').addClass("footerHome");
  }
}
