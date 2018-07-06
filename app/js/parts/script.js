$('document').ready(function() {

    $(".tabs-controll .item").on('click', function () {

        $(".tabs-controll .item").removeClass("active");
        $(this).addClass("active");

        $(".tabs_content--item").hide();
        t_content = $(this).attr("href");
        $(t_content).show();

        return false;
    });

    $(".tabs-controll .item:first").trigger("click");

    // Input as material design
    $('.input_box--input').blur(function(){
        if($(this).val().length !== 0) {
            $(this).addClass('filled');
        }
        else {
            $(this).removeClass('filled');
        }
    });

    // Input type file
    $(".input-file-box .btn-file").on('click', function() {
        $(this).parent().find('input[type="file"]').trigger("click");
    });

    // navigation scroll
    $(".scroll-to").on('click', function() {
        return $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: $($(this).attr("href")).offset().top - 80
        });
    });

    // section4 list
    $(".section4 .section4-list .item").on('click', function() {

       var article, image, companyInfo, numberId, text;

       article = $(this).text();
       image = $(this).find('img').attr("src");
       companyInfo = $(this).find('.box').attr("data-company");
       numberId = $(this).find('.box').attr("data-number-id");
       text = $(this).find('.box').attr("data-text");

       if( article == '' || article == undefined ) {
            article = '';
       }

        if( image == '' || image == undefined ) {
            image = '';
        }

        if( companyInfo == '' || companyInfo == undefined ) {
            companyInfo = '';
        }

        if( numberId == '' || numberId == undefined ) {
            numberId = '';
        }

        if( text == '' || text == undefined ) {
            text = '';
        }

       createViewbox(article, image, companyInfo, numberId, text);

       $('.section4-viewbox').fadeIn(100);
       $('.section4-viewbox').addClass("show");

       $(".section4-viewbox__close").on('click', function() {
          $('.section4-viewbox').fadeOut(100);
           $('.section4-viewbox').removeClass("show");
          $('.section4-viewbox').remove();
       });
    });

});

function createViewbox(article, image, companyInfo, numberId, text) {
    $('.section4-box').append(
    '<div class="section4-viewbox">' +
        '<div class="row">' +
            '<div class="col-5">' +
                '<img src="' + image + '" class="img-fluid" alt="img"/>' +
                '</div>' +
                '<div class="col-6">' +
                '<div class="article">' + article + '</div>' +
                '<div class="point company">Компания: <span>' + companyInfo + '</span></div>' +
                '<div class="point number-id">Номер идентификатора: <span>' + numberId + '</span></div>' +
                '<p class="text">' + text + '</p>' +
            '</div>' +
        '</div>' +
        '<div class="section4-viewbox__close"></div>' +
    '</div>'
    );
}