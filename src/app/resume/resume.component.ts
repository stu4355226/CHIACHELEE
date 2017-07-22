import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }

    if ($('footer').attr('class') == "footer") {
      $('footer').removeClass("footer");
      $('footer').addClass("footerHome");
    }
  }

}
