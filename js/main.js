let objects = $('.objects')[0]
let goals = document.getElementsByClassName('txt-goal')
let authors = document.getElementsByClassName('txt-author')

objects.onclick = function (event) {
    let target = event.target;
    "use strict";
    if (target.tagName != 'BUTTON') return;
    if ($(target).hasClass("checked")) return;
    $(target).siblings(".checked").toggleClass('checked')
    $(target).toggleClass('checked')
    $(goals[$(target).attr('class')[0]]).toggleClass('hidden')
    $(goals[$(target).attr('class')[0]]).toggleClass('visible')
    $(authors[$(target).attr('class')[0]]).toggleClass('hidden')
    $(authors[$(target).attr('class')[0]]).toggleClass('visible')
};