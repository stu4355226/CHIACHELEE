import { Component, OnInit } from '@angular/core';

declare var $: any
declare var google: any;


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

    var mapProp = {
      center: new google.maps.LatLng(16.428532, 188.4069221),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var locations = [
      ['35.6735408', '139.570304', 'Tokyo!'],
      ['-33.8474027', '150.6517815', 'Australia!'],
      ['28.1176141', '-80.7253176', 'Florida!'],
      ['23.5967311','119.8996393',' Taiwan!'],
      ['20.3514321','85.7982015','India!'],
      ['40.7058253','-74.118087','New York!'],
      ['35.8451159','124.853083','Korea!'],
      ['31.2246325','121.1965665','Shanghai!'],
      ['13.7248946','100.4930254','Thailand!'],
      ['34.0207504',',-118.6919177','Los Angeles!'],
      ['47.6149942','-122.4759887','Seattle!']
    ]
    //drop marks
    for (var i = 0; i < locations.length; i++) {
      var Marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map,
        title: locations[i][2]
      });
    }
    
  }
}