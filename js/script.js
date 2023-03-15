function fetchProductColors() {
    // const ele = document.getElementsByName('prd4_color');

    // for (i = 0; i < ele.length; i++) {
    //     if (ele[i].checked)
    //         document.getElementById("sjib").innerHTML = ele[i].value;
    // }

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

    function tableCreate() {

        if(document.getElementById("display_prd_color")) {
            document.body.removeChild(document.getElementById("display_prd_color"));
        }

        const div = document.createElement('div');
        div.setAttribute("class", "container")
        div.setAttribute("id", "display_prd_color");
        div.style.marginTop = "10px";
        div.style.padding = "0";
        

        const body = document.body, tbl = document.createElement('table');
    
        tbl.style.width = '100px';
        tbl.style.border = '1px solid black';

        const header = tbl.tHead();  document.createElement('thead')

        const headingRow = header.insertRow();

        const headingCell1 = headingRow.insertCell();
        headingCell1.appendChild(document.createTextNode("Product color"));

        const headingCell2 = headingRow.insertCell();
        headingCell2.appendChild(document.createTextNode("color count"));

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

                const td2 = tr.insertCell();
                td2.appendChild(document.createTextNode(val_itr.next().value));
                td2.style.border = '1px solid black';

            }
        }
        div.appendChild(tbl);
        body.appendChild(div);
    }

    tableCreate();
}