(function() {
    
    let dropdown = document.querySelector('.js-navbar-dropdown');
    let burgerMenu = document.querySelector('.js-navbar-burger-menu');
    burgerMenu.addEventListener('click', handleBurgerMenu);

    let isBurgerOpenState = false;

    function handleBurgerMenu() {
        console.log(200);
        
        if (!isBurgerOpenState) {
            dropdown.style.height = dropdown.scrollHeight + 'px';
            isBurgerOpenState = true;
        } else {
            dropdown.style.height = 0;
            isBurgerOpenState = false;
        }
    }

    let mediaQueryListObject =  window.matchMedia("(max-width: 720px)");

    mediaQueryListObject.addEventListener('change', (event) => {
        if (event.matches) {
            //console.log('Media query matched!');
        } else {
            //console.log('Media query did not match.');
            dropdown.style.height = 0;
            isBurgerOpenState = false;
        }
    });

}
)();