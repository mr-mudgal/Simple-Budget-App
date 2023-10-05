let cH = document.documentElement.clientHeight
let cW = document.documentElement.clientWidth
let div_form = document.getElementsByClassName('form-divs')
let form_cat = document.getElementById('form-cat')
let form_cat_cat = document.getElementById('form-cat_cat')
let p_bud = document.getElementById('p_bud')
let p_cat = document.getElementById('p_cat')
let logout = document.getElementById('logout')
let p_bud_li = document.getElementById('p_bud_li')
let p_cat_li = document.getElementById('p_cat_li')
let logout_li = document.getElementById('logout_li')
let act_btn = document.getElementById('action-buttons')
let act_btns = document.getElementsByClassName('act-button')
let act_btns_li = document.getElementById('list-act-button')

document.onclick = function (event) {
    switch (event.target.id) {
        case 'p_bud':
            form_cat.style.display = 'block'
            form_cat_cat.style.display = 'none'
            p_cat.style.borderTopColor = 'red'
            p_cat.style.borderBottomColor = 'red'
            p_bud.style.borderTopColor = ' green'
            p_bud.style.borderBottomColor = ' green'
            for (let i = 0; i < act_btns.length; i++) {
                act_btns[i].style.fontSize = 'small'
            }
            break
        case 'p_cat':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'block'
            p_bud.style.borderTopColor = 'red'
            p_bud.style.borderBottomColor = 'red'
            p_cat.style.borderTopColor = 'green'
            p_cat.style.borderBottomColor = 'green'
            for (let i = 0; i < act_btns.length; i++) {
                act_btns[i].style.fontSize = 'small'
            }
            break
        case 'p_bud_li':
            form_cat.style.display = 'block'
            p_bud_li.style.borderTopColor = ' green'
            p_bud_li.style.borderBottomColor = ' green'
            p_cat_li.style.borderTopColor = 'red'
            p_cat_li.style.borderBottomColor = 'red'
            form_cat_cat.style.display = 'none'
            p_bud_li.style.fontSize = 'small'
            p_cat_li.style.fontSize = 'small'
            logout_li.style.fontSize = 'small'
            act_btns_li.style.display = 'flex'
            act_btns_li.style.justifyContent = 'space-evenly'
            break
        case 'p_cat_li':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'block'
            p_bud_li.style.borderTopColor = 'red'
            p_bud_li.style.borderBottomColor = 'red'
            p_cat_li.style.borderTopColor = 'green'
            p_cat_li.style.borderBottomColor = 'green'
            p_bud_li.style.fontSize = 'small'
            p_cat_li.style.fontSize = 'small'
            logout_li.style.fontSize = 'small'
            act_btns_li.style.display = 'flex'
            act_btns_li.style.justifyContent = 'space-evenly'
            break
        case 'form-divs':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'none'
            for (let i = 0; i < act_btns.length; i++) {
                act_btns[i].style.fontSize = 'xxx-large'
            }
            p_bud_li.style.fontSize = 'xx-large'
            p_cat_li.style.fontSize = 'xx-large'
            logout_li.style.fontSize = 'xx-large'
            p_cat_li.style.borderTopColor = 'red'
            p_cat_li.style.borderBottomColor = 'red'
            p_cat.style.borderTopColor = 'red'
            p_cat.style.borderBottomColor = 'red'
            p_bud_li.style.borderTopColor = 'red'
            p_bud_li.style.borderBottomColor = 'red'
            p_bud.style.borderTopColor = 'red'
            p_bud.style.borderBottomColor = 'red'
            act_btns_li.style.display = ''
            break
        case 'action-buttons':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'none'
            for (let i = 0; i < act_btns.length; i++) {
                act_btns[i].style.fontSize = 'xxx-large'
            }
            p_bud_li.style.fontSize = 'xx-large'
            p_cat_li.style.fontSize = 'xx-large'
            p_cat.style.borderTopColor = 'red'
            p_cat.style.borderBottomColor = 'red'
            p_bud.style.borderTopColor = 'red'
            p_bud.style.borderBottomColor = 'red'
            break
        case 'list-act-button':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'none'
            p_bud_li.style.fontSize = 'xx-large'
            p_cat_li.style.fontSize = 'xx-large'
            logout_li.style.fontSize = 'xx-large'
            p_cat_li.style.borderTopColor = 'red'
            p_cat_li.style.borderBottomColor = 'red'
            p_bud_li.style.borderTopColor = 'red'
            p_bud_li.style.borderBottomColor = 'red'
            act_btns_li.style.display = ''
            break
    }
    switch (event.target.tagName) {
        case 'li':
            form_cat.style.display = 'none'
            form_cat_cat.style.display = 'none'
            p_bud_li.style.fontSize = 'xx-large'
            p_cat_li.style.fontSize = 'xx-large'
            logout_li.style.fontSize = 'xx-large'
            p_cat_li.style.borderTopColor = 'red'
            p_cat_li.style.borderBottomColor = 'red'
            p_bud_li.style.borderTopColor = 'red'
            p_bud_li.style.borderBottomColor = 'red'
            act_btns_li.style.display = ''
            break
    }
}

if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
}
