let form_cat = document.getElementById('form-cat')
let form_cat_cat = document.getElementById('form-cat_cat')
let p_bud = document.getElementById('p_bud')
let p_cat = document.getElementById('p_cat')
let p_bud_li = document.getElementById('p_bud_li')
let p_cat_li = document.getElementById('p_cat_li')
let logout_li = document.getElementById('logout_li')
let show_budget_li = document.getElementById('show_budget_li')
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
            show_budget_li.style.fontSize = 'small'
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
            show_budget_li.style.fontSize = 'small'
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
            show_budget_li.style.fontSize = ''
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
            show_budget_li.style.fontSize = ''
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
            show_budget_li.style.fontSize = ''
            break
        case 'show_budget':
            document.getElementById('form-divs').style.display = 'none'
            document.getElementById('bud-divs').style.display = 'revert'
            break
        case 'show_budget_li':
            document.getElementById('form-divs').style.display = 'none'
            document.getElementById('bud-divs').style.display = 'revert'
            break
        case 'back_menu':
            document.getElementById('bud-divs').style.display = ''
            document.getElementById('form-divs').style.display = 'revert'
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


function deleteBudget(del_bud) {
    open(`/delete-${del_bud}`, '_self')
}

function editBudget(edit_bud) {
    let new_bud = parseInt(prompt('Enter the new budget'))
    if (!isNaN(parseInt(new_bud))) {
        alert(`New Budget for category ${edit_bud} is = ${parseInt(new_bud)}`)
        open(`/edit-${edit_bud}:${new_bud}`, '_self')
    }
    else{
        alert('Enter only number')
    }
}

if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
}
