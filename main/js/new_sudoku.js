//////////////////////////////////////////////////////СОЗДАНИЕ ИГРОВОГО ПОЛЯ////////////////////////////////////////////////////
const num1 = 'M125.369 131.815H110.138V54H98.9231C89.7846 60.5077 84.3846 63.5538 74 68.4V81.5538L89.6462 77.6769V131.815H74V147.323H125.369V131.815Z'
const num2 = 'M134.815 128.985H95.7692C100.338 125.523 107.815 120.123 112.108 116.246C122.492 107.246 133.569 97.2769 133.569 80.8C133.569 60.5846 117.785 52 100.062 52C84.5539 52 71.2615 60.5846 66 78.3077L83.7231 83.9846C86.3538 73.6 92.1692 69.1692 99.6462 69.1692C108.092 69.1692 111.969 74.5692 111.969 81.7692C111.969 90.4923 107.262 98.9385 97.5692 107.246C93 111.262 88.4308 115.554 83.7231 119.431C78.8769 123.308 71.8154 128.708 66 134.523V146.292H134.815V128.985Z'
const num3 = 'M136.554 120.262C136.554 110.569 132.4 100.877 116.892 96.5846C129.631 93.1231 134.2 83.5692 134.2 75.6769C134.2 60.4462 119.523 52 101.8 52C85.8771 52 73.4155 60.5846 67.7386 73.4615L83.6617 80.5231C87.8155 71.2462 93.7694 67.7846 100.831 67.7846C109.139 67.7846 113.431 73.4615 113.431 78.5846C113.431 83.9846 110.523 91.1846 98.6155 91.1846H88.3694V106.415H99.5848C111.631 106.415 115.231 113.2 115.231 119.154C115.231 126.077 109.969 132.308 100 132.308C91.554 132.308 84.9078 128.569 80.2001 119.015L64.0001 126.354C71.754 142.138 83.9386 148.092 100 148.092C119.385 148.092 136.554 137.846 136.554 120.262Z'
const num4 = 'M137.323 110.354H122.508V54H103.262L62 111.6V126H102.846V147.185H122.508V126H137.323V110.354ZM79.8615 110.354L103.538 77.1231V110.354H79.8615Z'
const num5 = 'M134.2 115.781C134.2 97.7808 121.185 86.5654 103.046 86.5654C96.6769 86.5654 90.0308 88.6424 85.8769 90.7193L88.2308 71.3347H126.862L128.662 53.75H73L68.0154 99.8577L81.3077 108.719C86.5692 104.289 91.6923 102.627 97.6462 102.627C107.338 102.627 112.877 108.581 112.877 116.75C112.877 126.027 107.754 132.812 98.0615 132.812C89.4769 132.812 83.9385 128.104 80.0615 119.796L64 127.273C69.9538 139.458 80.4769 148.596 98.3385 148.596C119.246 148.596 134.2 134.612 134.2 115.781Z'
const num6 = 'M134.2 115.5C134.2 95.977 120.354 86.8385 105.539 86.8385C96.5386 86.8385 90.7232 90.7154 85.0463 93.9001C86.5694 73.2693 94.1847 68.1462 103.323 68.1462C109.692 68.1462 114.539 71.7462 117.169 78.2539L133.369 70.777C128.523 59.0077 118.969 52.5 104.708 52.5C76.6001 52.5 64.0001 76.177 64.0001 104.423C64.0001 131.7 79.6463 148.592 100.277 148.592C118.692 148.592 134.2 135.023 134.2 115.5ZM113.154 117.162C113.154 127.131 109.139 134.331 99.7232 134.331C90.3078 134.331 85.0463 125.331 85.0463 108.023C88.0924 105.808 93.9078 102.346 100 102.346C107.2 102.346 113.154 106.777 113.154 117.162Z'
const num7 = 'M135.231 55.0001H67.5231L66 72.8616H116.123C101.723 93.354 85.8 120.769 82.2 148.046H105.738C106.431 127.692 114.046 103.739 135.231 68.4309V55.0001Z'
const num8 = 'M134.892 121.677C134.892 110.6 128.8 102.569 117.169 97.5847C125.615 93.5693 131.569 86.0924 131.569 77.3693C131.569 63.1078 119.8 53.0001 99.5846 53.0001C79.6462 53.0001 66.9077 64.7693 66.9077 80.0001C66.9077 89.277 72.0308 96.7539 80.8923 101.323C70.0923 105.754 64 114.754 64 123.615C64 138.985 76.7385 149.369 99.1692 149.369C121.185 149.369 134.892 137.462 134.892 121.677ZM113.154 78.8924C113.154 84.9847 111.077 89.5539 104.292 92.4616C91.8308 88.1693 86.7077 84.2924 86.7077 77.6462C86.7077 71.6924 91.5539 67.2616 99.5846 67.2616C107.754 67.2616 113.154 72.6616 113.154 78.8924ZM114.4 123.892C114.4 130.677 108.862 135.385 99.1692 135.385C88.6462 135.385 82.9692 130.123 82.9692 122.092C82.9692 115.723 86.4308 110.877 93.7692 107.831C108.585 112.262 114.4 116.692 114.4 123.892Z'
const num9 = 'M134.455 97.1693C134.455 69.8924 119.502 53.0001 98.4554 53.0001C80.04 53.0001 64.2554 66.5693 64.2554 86.0924C64.2554 105.615 78.1015 114.754 92.9169 114.754C101.917 114.754 107.732 110.877 113.409 107.692C111.886 128.323 103.994 133.446 94.8554 133.446C88.4861 133.446 83.2246 128.877 81.0092 123.339L64.8092 130.815C69.6554 142.723 79.6246 149.092 93.8861 149.092C120.609 149.092 134.455 125.415 134.455 97.1693ZM113.409 93.5693C110.363 95.7847 104.548 99.2463 98.4554 99.2463C91.2554 99.2463 85.3015 94.8155 85.3015 84.4309C85.3015 74.4616 89.3169 67.2616 98.7323 67.2616C108.148 67.2616 113.409 76.2616 113.409 93.5693Z'

const num_paths = {
    1: num1,
    2: num2,
    3: num3,
    4: num4,
    5: num5,
    6: num6,
    7: num7,
    8: num8,
    9: num9,
}

const X_WING = [
    "000400602006000100090500080050300000301206405000007020030002060004000900507009000",
    '005000400020940000900700008003000290100203007079000300400008001000014060006000700',
    "003910700000003400100040006060700000002109600000002010700080003008200000005071900",
    "010037000000000010600008029070049600100000003009350070390200008040000000000790060",

    "100000569402000008050009040000640801000010000208035000040500010900000402621000005",
    "000000004760010050090002081070050010000709000080030060240100070010090045900000000"
]

const SINGLES_CHAINS = [
    "007003600039000800020010050040100300000367000003008060090070020004000130008600900",
    "200000006000602000010090004300009600040000090009500001500010370000408000600000002",
    "100400006046091080005020000000500109090000050402009000000010900080930560500008004",
    "000906000600008007100370009006000750004030100095000800200065008900800005000103000",
    "400800003006010409000005000010060092000301000640050080000600000907080100800009004",
    "090200350012003000300008000000017000630000089000930000000700002000300190078009030",
    "000000070000090810500203004800020000045000720000000003400308006072010000030000000",
    "062900000004308000709000400600801000003000200000207003001000904000709300000004120"
]

const DAILY_SUDOKU = [
    ".5..91.....1.4.......5.837.2.6......14..3..95......8.3.946.3.......7.6.....92..8.",
    ".2.1..95...7...2..9..7....15.8.3.....9.....8.....4.3.51....8..4..5...6...69..7.1.",
    "2.........74.......5..72.3..39...8..4.......7..1..342..6.74..5.......71......1..8"
]

const BASE_BOARD = DAILY_SUDOKU[2]

function create_rows_array() {
    let cross_array_board = []
    let j = 0
    for (let i = 0; i < 9; i++) {
        cross_array_board[i] = range(j, j += 8)
        j += 1
    }
    return cross_array_board
}

function create_game_board(BASE_BOARD) {
    const returnInt = (element) => parseInt(element, 10);
    let array_base_numb = BASE_BOARD.split("").map(returnInt)
    let i = 0
    let html = ''
    array_base_numb.forEach((num) => {
        console.log(num)
        let left = 52 * (i % 9)
        let top = 52 * parseInt(i / 9)
        if (left > 104) left += 4
        if (left > 264) left += 4
        if (top > 104) top += 4
        if (top > 264) top += 4
        if (num === 0 || isNaN(num)) {
            html += `
<div data-cell="${i}" aria-label="0" class="su-cell" style="top: ${top}px; left: ${left}px; width: 51px; height: 51px;">
    <div class="su-cell__conflict" style="width: 8px; height: 8px; bottom: 4px; right: 4px;"></div>
    <div class="su-candidates" style="pointer-events: none;">
`
            for (let j = 0; j < 9; j++) {
                left = 17 * (j % 3)
                top = 17 * parseInt(j / 3)
                html += `
<svg aria-label="${j + 1}" weight="light" class="su-candidate" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="top: ${top}px; left: ${left}px; width: 17px; height: 17px;">
    <path class="su-number hidden_candidats" d="${num_paths[j + 1]}"></path>
</svg>`
            }
            html += '</div></div>'
        } else {
            html += `
<div data-cell="${i}" aria-label="${num}" class="su-cell prefilled" style="top: ${top}px; left: ${left}px; width: 51px; height: 51px;">
    <svg class="su-cell__value su-stretch" number="${num}" weight="bold" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="su-number" d="${num_paths[num]}"></path>
    </svg>
    <div class="su-cell__conflict" ></div>
</div>`

        }
        i++
    })
    html += '<div class="su-board__frame" style="outline-width: 5px;"></div>'
    let board = document.querySelector(".su-board")
    board.insertAdjacentHTML("afterbegin", html)
    let new_selected_cell = document.querySelector(".su-cell")
    new_selected_cell.classList.add('selected')
    // let line_n_column=cross(new_selected_cell.dataset.cell)

}

function cross(center) {
    let l = []
    center = parseInt(center)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (ROWS_OF_BOARD[i][j] === center) {
                // let cross_cells = [...ROWS_OF_BOARD[i]]
                let cross_cells = new Set(ROWS_OF_BOARD[i])
                for (let i = 0; i < 9; i++) {
                    cross_cells.add(ROWS_OF_BOARD[i][j])
                }


                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (SQUARES_OF_BOARD[i][j] === center) {
                            SQUARES_OF_BOARD[i].forEach((el) => {
                                cross_cells.add(el)
                            })
                        }
                    }
                }
                // for(let i = 0; i < cross_cells.length; i++){
                //     let cell=document.querySelector(`[data-cell="${cross_cells[i]}"]`);
                //     if (cell.classList.contains('prefilled')||cell.classList.contains('guessed'))  continue
                //     l.push(cross_cells[i])
                //     cell.classList.add('cross')
                // }

                // let index = cross_cells.indexOf(center);
                // while (index!==-1){
                //     cross_cells.splice(index,1)
                //     index = cross_cells.indexOf(center);
                // }
                cross_cells.delete(center)
                return cross_cells
            }
        }
    }
}

function create_squares_array() {
    let l_super = []
    let l = []
    for (let m = 0; m < 7; m += 3) {
        for (let k = 0; k < 7; k += 3) {
            for (let i = k; i < k + 3; i++) {
                for (let j = m; j < m + 3; j++) {
                    l.push(ROWS_OF_BOARD[i][j])
                }
            }
            l_super.push(l)
            l = []
        }
    }
    return l_super
}


function base_cross_of_all_numbers() {
    let l = []
    for (let i = 0; i < 81; i++) {
        l.push(cross(i))
    }
    return l
}

function make_blue(k, old_k = NaN) {
    if (!isNaN(old_k)) {
        for (let value of all_cross[old_k]) {
            let cell = document.querySelector(`[data-cell="${value}"]`);
            cell.classList.remove('cross');
        }
    }
    for (let value of all_cross[k]) {
        let cell = document.querySelector(`[data-cell="${value}"]`);
        cell.classList.add('cross');
    }
}

function create_undo_array(BASE_BOARD) {
    let board = document.querySelector(".su-board").cloneNode(true)
    let history_array = []
    history_array.push(board)
    return history_array
}

create_game_board(BASE_BOARD)
const ROWS_OF_BOARD = create_rows_array()
const SQUARES_OF_BOARD = create_squares_array()
const all_cross = base_cross_of_all_numbers()
make_blue(0)
let history_value_board = create_undo_array(BASE_BOARD)
var position = 0

