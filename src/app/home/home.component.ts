import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // skills = Skills;
  constructor() { }

  ngOnInit() {
    //destroy fullpage object in the case that initial fullPage object more than one time while switch pages. 
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    //footer settings
    if($('footer').hasClass('footer'))
    {
      $('footer').removeClass('footer');
      $('footer').addClass('footerHome');
    }
  }
}

// const Skills = [
//   {
//     name: 'Angular2',
//     action: 'slideDown',
//     image: 'https://s3.amazonaws.com/media-p.slid.es/uploads/345677/images/2756726/angular_high.png',
//     textClass: 'overlay1',
//     percentage: '70%',
//     percentageClass: 'big c100 p70 center'
//   },
//   {
//     name: 'C#',
//     action: 'slideLeft',
//     image: 'https://cdn.codementor.io/assets/tutors/c-sharp-tutors-online.png',
//     textClass: 'overlay2',
//     percentage: '95%',
//     percentageClass: 'big c100 p95 center'
//   },
//   {
//     name: 'Azure',
//     action: 'slideUp',
//     image: 'https://www.cloudcruiser.com/wp-content/uploads/2016/03/Microsoft-Azure-logo.png',
//     textClass: 'overlay3',
//     percentage: '55%',
//     percentageClass: 'big c100 p55 center'
//   },
//   {
//     name: 'CSS',
//     action: 'slideDown',
//     image: 'http://www.myiconfinder.com/uploads/iconsets/8b61de4c84033266e15317a6eb9fda2d-css3.png',
//     textClass: 'overlay4',
//     percentage: '70%',
//     percentageClass: 'big c100 p70 center'
//   },
//   {
//     name: 'Dot Net',
//     action: 'slideUp',
//     image: 'https://aviture.us.com/wp-content/uploads/2014/03/Site-Icons_Technologies-NET2.png',
//     textClass: 'overlay5',
//     percentage: '90%',
//     percentageClass: 'big c100 p90 center'
//   },
//   {
//     name: 'Jquery',
//     action: 'slideLeft',
//     image: 'http://www.ics.hawaii.edu/wp-content/uploads/2013/08/jquerylogo320.png',
//     textClass: 'overlay6',
//     percentage: '75%',
//     percentageClass: 'big c100 p75 center'
//   }
// ];