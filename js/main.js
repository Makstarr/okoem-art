let objects=$('.objects')[0]
let goals=document.getElementsByClassName('txt-goal')
let authors=document.getElementsByClassName('txt-author')

console.log(authors)

objects.onclick = function(event) {
    let target = event.target; // где был клик?
    if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует
    if ($(target).hasClass("checked")) return;
    $(target).siblings(".checked").toggleClass('checked')
    $(target).toggleClass('checked')
    console.log(goals[$(target).attr('class')[0]])
    console.log(authors[$(target).attr('class')[0]])
    $(goals[$(target).attr('class')[0]]).toggleClass('hidden')
    $(goals[$(target).attr('class')[0]]).toggleClass('visible') 
    $(authors[$(target).attr('class')[0]]).toggleClass('hidden') 
    $(authors[$(target).attr('class')[0]]).toggleClass('visible') 
     // подсветить TD
  };
