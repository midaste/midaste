const transparentHeader = document.querySelector('.header-wrapper--transparent');

if (transparentHeader) {
    const setTransparentClass = (isTransparent = false) => {
        if (isTransparent) transparentHeader.classList.add('header-wrapper--scrolled');
        else transparentHeader.classList.remove('header-wrapper--scrolled');
    }

    setTransparentClass(window.scrollY > 0);

    document.addEventListener('scroll', debounce(event => {
        setTransparentClass(window.scrollY > 0);
    }, 50));
}