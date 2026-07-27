if (!customElements.get('fbt-slider')) {
    class FBTSlider extends HTMLElement {
        connectedCallback() {
            this.config = {
                hover: this.dataset.hover === 'true',
                loop: this.dataset.loop === 'true'
            }

            this.swiper = new Swiper(this, {
                resistance: true,
                resistanceRatio: 0,

                roundLengths: true,

                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                },

                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },

                loop: this.config.loop,

                // Mobile defaults
                simulateTouch: true,
                allowTouchMove: true,

                navigation: {
                    enabled: false,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    1024: {
                        simulateTouch: false,
                        allowTouchMove: false,

                        navigation: {
                            enabled: true,
                        },
                    },
                },
            });

            if (this.config.hover) this.initHover();
        }

        initHover() {
            this.addEventListener('mouseenter', () => {
                if (this.swiper.activeIndex === 0) {
                    this.hoverTimeout = setTimeout(() => {
                        this.swiper.slideTo(1);
                        this.swiped = true;
                    }, 1000);
                } else {
                    this.swiped = false;
                }
            });

            this.addEventListener('mouseleave', () => {
                clearTimeout(this.hoverTimeout);

                if (this.swiped && this.swiper.activeIndex === 1) {
                    this.swiper.slideTo(0);
                    this.swiped = false;
                }
            });
        }
    }

    customElements.define('fbt-slider', FBTSlider);
}

// Footer
const footerAccordions = document.querySelectorAll('.footer details');

if (footerAccordions.length > 0) {
    const mql = window.matchMedia("(width <= 768px)");
    
    const updateAccorionsVisibility = () => {
        if (mql.matches) footerAccordions.forEach(accordion => accordion.removeAttribute('open'));
        else footerAccordions.forEach(accordion => accordion.setAttribute('open', ''));
    }

    updateAccorionsVisibility();

    mql.addEventListener('change', () => {
        updateAccorionsVisibility();
    });
}