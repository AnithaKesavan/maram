import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  constructor() {}
  ngOnInit(): void {

    /*---------------------
      menu-stick
    --------------------- */
    var s = $("#sticker");
    console.log(s);
    var pos = s.position();
    $(window).on('scroll',function() {
      var windowpos = $(window).scrollTop();
      if (windowpos > pos.top) {
        s.addClass("stick");
      } else {
        s.removeClass("stick");
      }
    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'slide'
    });
    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('.mainmenu nav').meanmenu();

    /*--------------------------
     search
    ---------------------------- */
    $(".searching-icon").on("click", function(){
      $(".search").toggleClass("active");
    });

    /*--------------------------
     venobox
    ---------------------------- */
    $(document).ready(function(){
      $('.venobox').venobox();
    });
    /*--------------------------
     isotop
    ---------------------------- */

    $(window).on('load',function() {

      var layoutMode = 'fitRows';

      if($(window).width() < 992) {
        layoutMode = 'masonry';
      }

      $('.project-items').isotope({
        layoutMode: layoutMode,
      });
    });

    $('.project-nav li').on('click', function(){

      $(".project-nav li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".project-items").isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });
  }
}
