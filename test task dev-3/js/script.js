'use strict';

document.addEventListener("DOMContentLoaded", () => {

    let input = document.querySelector(".adding_input"),
        btn = document.querySelector(".button"),
        table = document.querySelector(".table"),
        inputArr = [];

        localStorage.clear();

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        inputCreate();
    });

    function inputCreate() {
        let inputText = input.value;
        for (let char of inputText) {
            inputArr.push(char);
        }
        document.querySelector(".add_word").reset();

        for (let i = 0; i < inputArr.length; i++)
        {
            let element = document.createElement("td");
            element.innerHTML = `<div class="movable">${inputArr[i]}</div>`;
            table.append(element);
        }

        inputArr = [];
    }

    document.onclick = function(event) {
        let swapFlag = +localStorage.getItem('flag');
        if (event.target.className != 'movable') {
            document.onmousemove = null;
            localStorage.clear();
            } else {
                if(swapFlag == 1) {
                    swap(event.target);
                    window.localStorage.clear();
                    document.onmousemove = null;
                } else {
                getCoordsCurElement(event.target);
                move(event.target);
            }

        }
    };

    function move(element) {

        element.style.position = 'absolute';

        document.onmousemove = function (event) {
            element.style.left = (event.pageX + 10) + 'px';
            element.style.top = (event.pageY + 10) + 'px';
        };
    }

    function getCoordsCurElement (element) {
        localStorage.setItem('flag', '1');
        localStorage.setItem('Position', `${element.style.position}`);
        localStorage.setItem('Left', `${element.style.left}`);
        localStorage.setItem('Top', `${element.style.top}`);
        localStorage.setItem('InnerText', `${element.innerText}`);
    }
    
    function swap(element) {

        let elementInner = element.innerText;
        element.style.position = localStorage.getItem('Position');
        element.style.left = localStorage.getItem('Left');
        element.style.top = localStorage.getItem('Top');
        element.innerText = localStorage.getItem('InnerText');
        element.innerText = elementInner;
    }
});