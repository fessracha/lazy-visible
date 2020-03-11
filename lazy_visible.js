window.lazy_visible = function () {
    const _scroll_handler = function () {
        _$lazy_items.forEach($element => {
            let document_scroll_offset_top = window.pageYOffset + window.innerHeight,
                item_offset_top = $element.getBoundingClientRect().top + pageYOffset;

            if (item_offset_top <= document_scroll_offset_top) {
                $element.classList.add('lazy-visible--active')
                $element.style.visibility = 'visible'
            }
        })
    },
        _hidden_lazy_items = function () {
            _$lazy_items.forEach($element => $element.style.visibility = 'hidden')
        },
        _$lazy_items = document.querySelectorAll('.lazy-visible');
    return {
        init() {
            _hidden_lazy_items();
            _scroll_handler();
            document.addEventListener('scroll', _scroll_handler)
        },
        stop() {
            document.removeEventListener('scroll', _scroll_handler)
        }
    }
}