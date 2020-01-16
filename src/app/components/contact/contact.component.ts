import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  ngOnInit(): void {
    /*--------------------------
     testimonial
    ---------------------------- */
    $(".carousel-one").slick({
      dots: true,
      list:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    $(".carousel-two").slick({
      dots: true,
      list:false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });
  }
}
