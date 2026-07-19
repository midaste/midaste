if (!customElements.get('fbt-slider')) {
    class FBTSlider extends HTMLElement {
        connectedCallback() {
            this.swiper = new Swiper(this, {
                scrollbar: {
                    el: '.swiper-scrollbar'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });

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