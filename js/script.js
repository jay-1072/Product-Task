
var prdNames = [];

function tableCreate(map) {

    if (document.getElementById("display_prd_color")) {
        document.body.removeChild(document.getElementById("display_prd_color"));
    }

    if (map.size === 0) {
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
    const _prdName = document.getElementById('prdName').value;

    document.getElementById('prdName').value = "";

    if (_prdName === '') {
        alert('Please add the product name ...');
        return false;
    }
    else if (localStorage.getItem('prdNames') === null && prdNames.length === 0) {
        prdNames.push(_prdName);
        localStorage.setItem('prdNames', prdNames);
    }
    else if (localStorage.getItem('prdNames') !== null) {
        let prdArr = Array(localStorage.getItem('prdNames'));
       
        for(let i=0; i<prdArr.length; i++) {
            prdNames[i] = prdArr[i];
        }
        prdNames.push(_prdName);
        localStorage.setItem('prdNames', prdNames);
    }

    displayProduct();
}

function displayProduct() {

    let prod_container = document.getElementById("prd_container");
    
    let divRow = document.createElement("div");
    divRow.className = "row";

    prdArr = Array(localStorage.getItem('prdNames'));

    console.log(prdArr);

    // for (let prd of prdArr) {

        // CREATED FIRST COL
        let divCol1 = document.createElement("div");
        divCol1.className = "col py-1";
        divCol1.style.textAlign = 'center';

        let colContent1 = document.createTextNode(prdNames[prdNames.length-1]);
        divCol1.appendChild(colContent1);

        // CREATED SECOND COL
        let divCol2 = document.createElement("div");
        divCol2.className = "col";

        let divCol2Row = document.createElement("div");
        divCol2Row.className = "row";

        // first radio button for red color
        let divCol2Row_Col1 = document.createElement("div");
        divCol2Row_Col1.className = "col";

        let formCheckDiv1 = document.createElement("div");
        formCheckDiv1.className = "form-check";

        let radioBtn1 = document.createElement("input");
        radioBtn1.className = "form-check-input";
        radioBtn1.setAttribute("type", "radio");
        radioBtn1.setAttribute("value", "red");
        radioBtn1.setAttribute("id", "red_color");

        formCheckDiv1.appendChild(radioBtn1);
        divCol2Row_Col1.appendChild(formCheckDiv1);

        // second radio button for green color
        let divCol2Row_Col2 = document.createElement("div");
        divCol2Row_Col2.className = "col";

        let formCheckDiv2 = document.createElement("div");
        formCheckDiv2.className = "form-check";

        let radioBtn2 = document.createElement("input");
        radioBtn2.className = "form-check-input";
        radioBtn2.setAttribute("type", "radio");
        radioBtn2.setAttribute("value", "green");
        radioBtn2.setAttribute("id", "green_color");

        formCheckDiv2.appendChild(radioBtn2);
        divCol2Row_Col2.appendChild(formCheckDiv2);

        // third radio button for yellow color
        let divCol2Row_Col3 = document.createElement("div");
        divCol2Row_Col3.className = "col";

        let formCheckDiv3 = document.createElement("div");
        formCheckDiv3.className = "form-check";

        let radioBtn3 = document.createElement("input");
        radioBtn3.className = "form-check-input";
        radioBtn3.setAttribute("type", "radio");
        radioBtn3.setAttribute("value", "yellow");
        radioBtn3.setAttribute("id", "yellow_color");

        formCheckDiv3.appendChild(radioBtn3);
        divCol2Row_Col3.appendChild(formCheckDiv3);

        // fourth radio button for blue color
        let divCol2Row_Col4 = document.createElement("div");
        divCol2Row_Col4.className = "col";

        let formCheckDiv4 = document.createElement("div");
        formCheckDiv4.className = "form-check";

        let radioBtn4 = document.createElement("input");
        radioBtn4.className = "form-check-input";
        radioBtn4.setAttribute("type", "radio");
        radioBtn4.setAttribute("value", "blue");
        radioBtn4.setAttribute("id", "blue_color");

        formCheckDiv4.appendChild(radioBtn4);
        divCol2Row_Col4.appendChild(formCheckDiv4);

        // fifth radio button for orange color
        let divCol2Row_Col5 = document.createElement("div");
        divCol2Row_Col5.className = "col";

        let formCheckDiv5 = document.createElement("div");
        formCheckDiv5.className = "form-check";

        let radioBtn5 = document.createElement("input");
        radioBtn5.className = "form-check-input";
        radioBtn5.setAttribute("type", "radio");
        radioBtn5.setAttribute("value", "orange");
        radioBtn5.setAttribute("id", "orange_color");

        formCheckDiv5.appendChild(radioBtn5);
        divCol2Row_Col5.appendChild(formCheckDiv5);

        // sixth radio button for black color
        let divCol2Row_Col6 = document.createElement("div");
        divCol2Row_Col6.className = "col";

        let formCheckDiv6 = document.createElement("div");
        formCheckDiv6.className = "form-check";

        let radioBtn6 = document.createElement("input");
        radioBtn6.className = "form-check-input";
        radioBtn6.setAttribute("type", "radio");
        radioBtn6.setAttribute("value", "black");
        radioBtn6.setAttribute("id", "black_color");

        formCheckDiv6.appendChild(radioBtn6);
        divCol2Row_Col6.appendChild(formCheckDiv6);

        divCol2Row.appendChild(divCol2Row_Col1);
        divCol2Row.appendChild(divCol2Row_Col2);
        divCol2Row.appendChild(divCol2Row_Col3);
        divCol2Row.appendChild(divCol2Row_Col4);
        divCol2Row.appendChild(divCol2Row_Col5);
        divCol2Row.appendChild(divCol2Row_Col6);

        // CREATED THIRD COL
        let divCol3 = document.createElement("div");
        divCol3.className = "col py-2";
        divCol3.style.textAlign = 'center';

        let delBtn = document.createElement("button");
        delBtn.setAttribute('type', 'button');
        delBtn.className = "btn btn-primary";
       

        let BtnContent = document.createTextNode("delete");
        delBtn.appendChild(BtnContent);

        divCol3.appendChild(delBtn);

        divRow.appendChild(divCol1);
        divRow.appendChild(divCol2);
        divRow.appendChild(divCol3);


        prod_container.appendChild(divRow);

    // }
}

function reloadModal() {
}
