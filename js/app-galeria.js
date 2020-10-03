$(document).ready(function(){

    $('.categorias .category-items[category="all"]').addClass('ct_item-active');
    
    
    $('.category-items').click(function(){
        var catProducto =$(this).attr('category');
        console.log(catProducto);


        $('.category-items').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');


        $('.produc-items').css('transform','scale(0)');
        function hideProduct(){
            $('.produc-items').hide();
        } setTimeout(hideProduct,400);


        function showProduct(){
            $('.produc-items[category="'+catProducto+'"]').show();
            $('.produc-items[category="'+catProducto+'"]').css('transform','scale(1)');
            
        } setTimeout(showProduct,400);
  
         
    });

    // mostrando productos-----------------------------------------------
    $('.category-items[category="all"]').click(function(){
        function showAll(){
            $('.produc-items').show();
            $('.produc-items').css('transform','scale(1)');
        }setTimeout(showAll,400);
        

    });
});