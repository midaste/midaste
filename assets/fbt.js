if (!customElements.get('fbt-slider')) {
    class FBTSlider extends HTMLElement {
        connectedCallback() {
            this.config = {
                hover: this.dataset.hover === 'true',
                loop: this.dataset.loop === 'true'
            }

            this.swiper = new Swiper(this, {
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                loop: this.config.loop,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });

            if (this.config.hover) this.initHover();
        }
        
        initHover() {
            this.addEventListener('mouseenter', () => {
                if (this.swiper.activeIndex === 0) {
                    this.swiper.slideTo(1);
                    this.swiped = true;
                } else this.swiped = false;
            });
    
            this.addEventListener('mouseleave', () => {
                if (this.swiped && this.swiper.activeIndex === 1) {
                    this.swiper.slideTo(0);
                    this.swiped = false;
                }
            });
        }
    }

    customElements.define('fbt-slider', FBTSlider);
}