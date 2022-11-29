export let menu_hamburguer = () => {

  $(document).ready(function(){
    
      $('.menu .btn').on('click', function() {
        $('#nav').toggleClass('menu_show');
      });    
      
    });

}