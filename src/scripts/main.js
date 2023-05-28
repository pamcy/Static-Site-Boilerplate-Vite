import $ from 'jquery'
window.jQuery = window.$ = $

import { setupCounter } from './counter'

$(function () {
    console.log('hallo')

    $('h1').on('click', function () {
        alert('it works!')
    })

    setupCounter(document.querySelector('.counts'))
})
