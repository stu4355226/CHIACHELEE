import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }

    if ($('footer').attr('class') == "footerHome") {
      $('footer').removeClass("footerHome");
      $('footer').addClass("footer");
    }
  }
}
