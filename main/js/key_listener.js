//////////////////////////////////////////////////////КЛАВИШИ////////////////////////////////////////////////////
const listen_arrow=[ 'ArrowUp', 'ArrowLeft','ArrowDown', 'ArrowRight']
const listen_wasd=['KeyW', 'KeyA', 'KeyS', 'KeyD' ]
const listen_digit=['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9']
const listen_numpad=['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9']
const listen_delete = ['Backspace', 'Delete']
const ArrowUp_line=range(0,8)
const ArrowRight_line=range(8,80, 9)
const ArrowDown_line=range(72,80)
const ArrowLeft_line=range(0,72, 9)
const ArrowLines=[ArrowUp_line,ArrowLeft_line,ArrowDown_line, ArrowRight_line ]
const keyboard_buttons= document.querySelectorAll(".su-keyboard__svg")
let candidat_mode= true
function range(start, end, step=1){
    let result = [];
    // 2.Создать цикл,который заполнит массив «result» значениями от 100 до 0 включительно при помощи декремента.
    while (start <= end) {
        result.push(start);
        start+=step

    }
    return result
}


function check_arrow(e){
    let key=e.code
    let  arrow_match= listen_arrow.indexOf(key)
    if (arrow_match===-1) arrow_match = listen_wasd.indexOf(key)
    if (arrow_match===-1) return
    e.preventDefault();
    let selected_cell= document.querySelector(".selected")
    let cell_numb=parseInt(selected_cell.dataset.cell)
    let res = ArrowLines[arrow_match].find(item=>item===cell_numb)
    if (res!==undefined) return true //Нельзя пересекать границу

    selected_cell.classList.remove('selected')
    let new_cell_numb=cell_numb
    if (arrow_match===0) new_cell_numb-=9
    else if (arrow_match===1) new_cell_numb-=1
    else if (arrow_match===2) new_cell_numb+=9
    else if (arrow_match===3) new_cell_numb+=1
    let new_selected_cell=document.querySelector(`[data-cell="${new_cell_numb}"]`);
    new_selected_cell.classList.add('selected')
    make_blue(new_cell_numb, cell_numb)
    return true
}


function delete_red(previous_number, selected_cell){
    selected_cell.classList.remove('conflicted')
    for (let value of all_cross[selected_cell.dataset.cell]) {
        let cell = document.querySelector(`[data-cell="${value}"]`)
        if (cell.classList.contains('conflicted') && cell.ariaLabel === previous_number) {
            let flag=false
            for (let value2 of all_cross[cell.dataset.cell]) {
                let cell2 = document.querySelector(`[data-cell="${value2}"]`)
                if (cell2.ariaLabel === previous_number) flag = true
            }
            if (!flag) cell.classList.remove('conflicted')
        }
    }
}


function candidat_number(num){
    let candidats=document.querySelectorAll(".selected > .su-candidates> .su-candidate")
    let class_list=candidats[num-1].firstElementChild.classList
    class_list.toggle('hidden_candidats')

}

function add_number(selected_cell, num){
    //Удаление цифры, если есть
    console.log(selected_cell.ariaLabel)
    const previous_number = selected_cell.ariaLabel
    selected_cell.ariaLabel = `${num}`
    let f_child=selected_cell.firstElementChild
    if (f_child.tagName!=='DIV') {
        f_child.remove()
        //Удаление красного, если есть
        if (selected_cell.classList.contains('conflicted')) delete_red(previous_number, selected_cell)
    }

    //Добавление новой цифры
    let raw_html = `<svg class="su-cell__value su-stretch" number="${num}" weight="bold" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="su-number" d="${num_paths[num]}"></path></svg>`
    selected_cell.insertAdjacentHTML("afterbegin", raw_html)
    selected_cell.classList.add('guessed')


    //Добавление красного, если есть
    for (let value of all_cross[selected_cell.dataset.cell]){
        let cell=document.querySelector(`[data-cell="${value}"]`)
        if (cell.ariaLabel===num){
            cell.classList.add('conflicted'); selected_cell.classList.add('conflicted')
        }
    }
}

function check_number(e){
    let key=e.code
    let  number_match= listen_numpad.indexOf(key)
    if (number_match===-1) number_match = listen_digit.indexOf(key)
    if (number_match===-1) return
    e.preventDefault();
    let selected_cell= document.querySelector(".selected")
    console.log(selected_cell.ariaLabel)
    if (selected_cell.classList.contains('prefilled'))  return true //Нельзя ставить цифры в заранее установленные ячейки
    let num=number_match+1
    num=num.toString()
    if (selected_cell.classList.contains('guessed')&&num===selected_cell.ariaLabel&&!candidat_mode)  return true //Эта цифра уже стоит в этой ячейке

    //Добавление новой версии поля в историю для Undo Redo
    if (position+1!==history_value_board.length) history_value_board.splice(position+1)
    console.log(history_value_board)
    let board=document.querySelector(".su-board")
    let current_value_board= board.cloneNode(true)
    board.replaceWith(current_value_board)
    selected_cell= document.querySelector(".selected")

    //Добавление кандидата
    if (candidat_mode) {
        if (selected_cell.classList.contains('guessed')){
            delete_guess(selected_cell)
        }
        if (position+1!==history_value_board.length) history_value_board.splice(position+1)
        candidat_number(num)
        history_value_board.push(current_value_board)
        position+=1
        return true
    }


    //Удаление всех кандидатов, так как ставится цифра
    let candidats=document.querySelectorAll(".selected > .su-candidates> .su-candidate")
    for(let i=0; i<9;i++) {
        candidats[i].firstElementChild.classList.add('hidden_candidats')
    }

    //Добавление большой цифры
    add_number(selected_cell, num)
    history_value_board.push(current_value_board)
    position+=1





    return true
}


function delete_guess(selected_cell){
    let f_child=selected_cell.firstElementChild
    f_child.remove()
    selected_cell.classList.remove('guessed')
    let previous_number=selected_cell.ariaLabel
    selected_cell.ariaLabel = `0`
    if (!selected_cell.classList.contains('conflicted')) return true //нету конфликтов
    //удаление красного
    delete_red(previous_number, selected_cell)
}
function check_delete(e){
    let key= e.code
    let  number_match= listen_delete.indexOf(key)
    if (number_match===-1) return
    e.preventDefault();
    let selected_cell= document.querySelector(".selected")
    if (selected_cell.classList.contains('prefilled'))  return true //Нельзя удалить цифры раставленные заранее
    if (!selected_cell.classList.contains('guessed')) return true //Яейчка пустая


    if (position+1!==history_value_board.length) history_value_board.splice(position+1)
    console.log(history_value_board)
    let board=document.querySelector(".su-board")
    let current_value_board= board.cloneNode(true)
    board.replaceWith(current_value_board)
    selected_cell= document.querySelector(".selected")
    delete_guess(selected_cell)
    history_value_board.push(current_value_board)
    position+=1

    return true
}


function  check_switch(e){
    if (e.code !== 'Space') return

    e.preventDefault();
    let mode_buttons= document.querySelectorAll(".su-keyboard__mode")
    if (mode_buttons[0].classList.contains("normalMode")){
        candidat_mode=true
        mode_buttons[0].classList.remove("normalMode")
        mode_buttons[1].classList.add("candidateMode")
        for (let button of keyboard_buttons){
            button.classList.add("candidate")
        }
    }
    else{
        candidat_mode=false
        mode_buttons[1].classList.remove("candidateMode")
        mode_buttons[0].classList.add("normalMode")
        for (let button of keyboard_buttons){
            button.classList.remove("candidate")
            }
    }
    return true
}
function check_undo(e){
    if (!(e.ctrlKey && e.code === 'KeyZ'&& !e.shiftKey)) return
    if (position===0) return true //нельзя делать шаг назад на первом ходу
    position--
    let current_position_board=history_value_board[position]
    console.log(current_position_board)
    let board=document.querySelector(".su-board")
    // board.replaceWith(current_position_board)
    let parentDiv=board.parentNode
    parentDiv.replaceChild(current_position_board, board);
    return true
}

function check_redo(e) {
    if (!(e.ctrlKey && e.shiftKey && e.code === 'KeyZ')) return
    if (position+1===history_value_board.length) return true //нельзя делать шаг вперёд на последнем ходу
    position++
    let current_position_board=history_value_board[position]
    console.log(current_position_board)
    let board=document.querySelector(".su-board")
    board.replaceWith(current_position_board)
    return true

}

function listened_key(e) {
    // console.log(e.code)
    if (check_arrow(e)) return     //Поиск стрелок или  wasd
    if (check_number(e)) return     //Поиск цифры с numpad или с цифр над клавиатурой
    if (check_delete(e)) return     //Поиск удаления
    if (check_switch(e)) return     //Поиск переключателя на кандидаты
    if (check_undo(e)) return     //Поиск сочетания ctrl+z
    if (check_redo(e)) return  //Поиск сочетания ctrl+shift_z
}

document.addEventListener('keydown', listened_key)