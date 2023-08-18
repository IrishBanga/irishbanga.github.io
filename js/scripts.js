/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    
    /*Hourly rate visibility and input requirement logic*/
    const hourlyRate = document.getElementById('hourlyRate');
    const rateInput = document.getElementById('rate');
    function determineRateDisplay() {
        if (document.getElementById('hiringRadio').checked) 
        {
            hourlyRate.classList.remove('d-none'); //changing visibility of the rate field
            rateInput.required = true; //making the input mandatory in case the hiringRadio button is checked
        } else 
        {
            hourlyRate.classList.add('d-none');
            rateInput.required = false; //dropping the input requirement
        }
    }

    const radioButtons = document.querySelectorAll('input[name="purpose"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('click', determineRateDisplay);
    });

});
