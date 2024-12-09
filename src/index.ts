function typeNum(n: number) {
    if (n == 0) {
        (document.querySelector(".zero") as HTMLElement).click()
    } else if (n > 9 || n < 0 || n.toString().includes(".")) {
        for (const c of n.toString()) {
            if (c == "-") {
                (document.querySelector(".minus") as HTMLElement).click()
            } else if (c == ".") {
                (document.querySelector(".comma") as HTMLElement).click()
            } else {
                typeNum(Number(c))
            }
        }
    } else {
        (document.querySelectorAll(".buttons-row__button")[n - 1] as HTMLElement).click()
    }
}

function answers() {
    const id = setInterval(() => {
        try {
            const question = document.querySelector(".math99-game-question-view");

            if (question == null) {
                setTimeout(() => {
                    (document.querySelector(".rewards-view-next-btn") as HTMLElement).click()

                    setTimeout(() => {
                        (document.querySelector(".btn-continue") as HTMLElement).click()

                        setTimeout(() => {
                            (document.querySelector(".island-info-stars-btn") as HTMLElement).click()

                            if (shouldRecurse) {
                                setTimeout(bot, 3000)
                            }
                        }, 4000)
                    }, 5000)
                }, 10000)

                clearInterval(id)
                console.timeEnd("BOT")
            }

            const answer = eval((question as HTMLElement).innerText.replaceAll("x", "*"))

            typeNum(answer);

            (document.querySelector(".button__submit") as HTMLElement).click()
        } catch {
            clearInterval(id)
            console.timeEnd("BOT")
        }
    }, 2)

    mainInterval = id;
}

function bot() {
    (document.querySelector(".play-btn") as HTMLElement).click()
    setTimeout(() => {
        (document.querySelector(".carousel__prev") as HTMLElement).click();

        // subtraction
        (document.querySelectorAll(".carousel__slide--visible")[1] as HTMLElement).click();

        // play
        (document.querySelector(".gs-actions-btn") as HTMLElement).click()

        setTimeout(() => {
            console.time("BOT")

            answers()
        }, 5000)
    }, 500)
}

let mainInterval = -1;
let shouldRecurse = true;

function start() {
    bot()
}

function stop() {
    shouldRecurse = false;
}