(function () {
    let formFilter = document.querySelector(".js-form-filter");

    formFilter.addEventListener('click', handleFilterCollapse);

    function handleFilterCollapse(event) {
        if (event.target.classList.contains("js-filter-title-button")) {

            let button = event.target;
            let dropdown = event.target.nextElementSibling;
            let buttonState = button.getAttribute('aria-expanded');

            if (dropdown.classList.contains("js-filter-dropdown")) {
                if (buttonState === 'false') {
                    button.setAttribute('aria-expanded', 'true');
                    dropdown.style.height = dropdown.scrollHeight + 'px';
                } else {
                    button.setAttribute('aria-expanded', 'false');
                    dropdown.style.height = 0;
                }
            }
        }
    }
})();

(function () {
    let filterListButtons = document.querySelectorAll(".js-filter-title-button");

    
    filterListButtons[1].setAttribute('aria-expanded', 'true');
    filterListButtons[2].setAttribute('aria-expanded', 'true');

    filterListButtons.forEach((each) => {
        let dropdown = each.nextElementSibling;

        if (each.getAttribute('aria-expanded') == 'true') {
            dropdown.style.height = dropdown.scrollHeight + 'px';
        } else {
            dropdown.style.height = 0;
        }
    })

})();//onload