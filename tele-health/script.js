//   navbar function 
$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(Window).scrollTop()  >  30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

    
});

function toggleDropdown() {
    const dropdown = document.getElementById('hospital-dropdown');
    const toggleLink = document.querySelector('.dropdown-toggle');

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        toggleLink.classList.remove('active');
    } else {
        dropdown.style.display = 'block';
        toggleLink.classList.add('active');
    }
}