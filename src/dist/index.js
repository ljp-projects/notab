"use strict";
function typeNum(n) {
    if (n == 0) {
        document.querySelector(".zero").click();
    }
    else if (n > 9 || n < 0 || n.toString().includes(".")) {
        for (const c of n.toString()) {
            if (c == "-") {
                document.querySelector(".minus").click();
            }
            else if (c == ".") {
                document.querySelector(".comma").click();
            }
            else {
                typeNum(Number(c));
            }
        }
    }
    else {
        document.querySelectorAll(".buttons-row__button")[n - 1].click();
    }
}
function answers() {
    const id = setInterval(() => {
        try {
            const question = document.querySelector(".math99-game-question-view");
            if (question == null) {
                setTimeout(() => {
                    document.querySelector(".rewards-view-next-btn").click();
                    setTimeout(() => {
                        document.querySelector(".btn-continue").click();
                        setTimeout(() => {
                            document.querySelector(".island-info-stars-btn").click();
                            if (shouldRecurse) {
                                setTimeout(bot, 3000);
                            }
                        }, 4000);
                    }, 5000);
                }, 10000);
                clearInterval(id);
                console.timeEnd("BOT");
            }
            const answer = eval(question.innerText.replaceAll("x", "*"));
            typeNum(answer);
            document.querySelector(".button__submit").click();
        }
        catch {
            clearInterval(id);
            console.timeEnd("BOT");
        }
    }, 2);
    mainInterval = id;
}
function bot() {
    document.querySelector(".play-btn").click();
    setTimeout(() => {
        document.querySelector(".carousel__prev").click();
        // subtraction
        document.querySelectorAll(".carousel__slide--visible")[1].click();
        // play
        document.querySelector(".gs-actions-btn").click();
        setTimeout(() => {
            console.time("BOT");
            answers();
        }, 5000);
    }, 500);
}
let mainInterval = -1;
let shouldRecurse = true;
function start() {
    bot();
}
function stop() {
    shouldRecurse = false;
}
