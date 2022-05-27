

function getTemplate(state) {

    return `
    <div class="slider__before" style="width: ${state.width}px; background-image: url(${state.before})" >
        <div class="slider__resize" data-type="resize"></div>
    </div>
    <div class="slider__after" style="background-image: url(${state.after})"></div>
`
}
class Slider {
    constructor (selector, state) {
        this.$slider = document.getElementById(selector);
        this.state = {
            ...state,
            width: state.width || 512
        };
        this.#render(this.state);
        this.#listen();
    }

    #render (state) {
        this.$slider.innerHTML = getTemplate(state);
    }

    #update (props) {
        this.state = {
            ...this.state,
            ...props
        }
        this.#render(this.state);
    }

    #listen () {
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.$slider.addEventListener('mousedown', this.mouseDownHandler);
        this.$slider.addEventListener('mouseup', this.mouseUpHandler);
    }

    setBefore (url) {
        this.state = {
            ...this.state,
            before: url
        }
        this.#render(this.state)
    }

    setAfter (url) {
        console.log();
        this.state = {
            ...this.state,
            after: url
        }
        this.#render(this.state)
    }

    mouseDownHandler (event) {
        if (event.target.dataset.type === 'resize')
        this.$slider.addEventListener('mousemove', this.mouseMoveHandler);
        this.currentPosition = event.clientX;
        console.log(this.currentPosition);
    }

    mouseUpHandler () {
        this.$slider.removeEventListener('mousemove', this.mouseMoveHandler);
    }

    mouseMoveHandler (event) {
        let shift = this.currentPosition - event.clientX;
        this.currentPosition = event.clientX;
        this.#update({width: this.state.width- shift});
    }
}


export default Slider;