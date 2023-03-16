
var prdNames = [];

function tableCreate(map) {

    if (document.getElementById("display_prd_color")) {
        document.body.removeChild(document.getElementById("display_prd_color"));
    }

    if(map.size===0) {
        alert("Please select the product color first...");
        return false;
    }

    const div = document.createElement('div');
    div.setAttribute("class", "container")
    div.setAttribute("id", "display_prd_color");
    div.style.marginTop = "20px";
    div.style.padding = "0";

    const body = document.body, tbl = document.createElement('table');
    tbl.setAttribute("id", "prdColorTbl");
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';
    tbl.style.marginBottom = '50px';

    const header = document.createElement('thead');

    const headingRow = tbl.insertRow();

    const headingCell1 = headingRow.insertCell();
    headingCell1.appendChild(document.createTextNode(`Product color`));
    headingCell1.style.border = '1px solid black';
    headingCell1.style.fontWeight = '700'

    const headingCell2 = headingRow.insertCell();
    headingCell2.appendChild(document.createTextNode(`Color count`));
    headingCell2.style.border = '1px solid black';
    headingCell2.style.fontWeight = '700'

    headingRow.appendChild(headingCell1);
    headingRow.appendChild(headingCell2);

    header.appendChild(headingRow);
    tbl.appendChild(header);

    const key_itr = map.keys();
    const val_itr = map.values();

    for (let i = 0; i < map.size; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < 1; j++) {

            const td1 = tr.insertCell();
            td1.appendChild(document.createTextNode(key_itr.next().value));
            td1.style.border = '1px solid black';
            td1.style.textAlign = 'center';

            const td2 = tr.insertCell();
            td2.appendChild(document.createTextNode(val_itr.next().value));
            td2.style.border = '1px solid black';
            td2.style.textAlign = 'center';
        }
    }

    if (map.size !== 0) {
        div.appendChild(tbl);
        body.appendChild(div);
    }
}

function fetchProductColors() {

    let redCnt = 0, greenCnt = 0, yellowCnt = 0, blueCnt = 0, orangeCnt = 0, blackCnt = 0;
    const map = new Map();

    const radioSel = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < radioSel.length; i++) {
        if (radioSel[i].checked) {

            if (radioSel[i].value == 'red') {
                redCnt += 1;
                map.set(radioSel[i].value, redCnt);
            }
            else if (radioSel[i].value == 'green') {
                greenCnt += 1;
                map.set(radioSel[i].value, greenCnt);
            }
            else if (radioSel[i].value == 'yellow') {
                yellowCnt += 1;
                map.set(radioSel[i].value, yellowCnt);
            }
            else if (radioSel[i].value == 'blue') {
                blueCnt += 1;
                map.set(radioSel[i].value, blueCnt);
            }
            else if (radioSel[i].value == 'orange') {
                orangeCnt += 1;
                map.set(radioSel[i].value, orangeCnt);
            }
            else if (radioSel[i].value == 'black') {
                blackCnt += 1;
                map.set(radioSel[i].value, blackCnt);
            }
        }
    }

    tableCreate(map);
}

function addProduct() {
    const _prdName = document.getElementById('prdName');

    if(_prdName.value==='') {
        alert('Please add the product name ...');
        return false;
    }
    else if(localStorage.getItem('prdNames')===null && prdNames.length===0) {
        prdNames.push(_prdName.value);
    }
    else if(localStorage.getItem('prdNames')!==null) {
         prdNames = Array(localStorage.getItem('prdNames'));
         prdNames.push(_prdName.value);
    }

    localStorage.setItem('prdNames', prdNames);

 
}

function reloadModal() {
    if(document.getElementsByClassName('prd-name').value!=='') {
        document.getElementsByClassName('prd-name').value = '';
    }
}
