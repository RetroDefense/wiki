document.addEventListener("DOMContentLoaded", () => {
    const gameCards = document.querySelectorAll(".game-card");
    const enemyDetails = document.getElementById("enemy-details");
    const enemyImage = document.getElementById("enemy-image");
    const enemyDescription = document.getElementById("enemy-description");
    const enemyStats = document.getElementById("enemy-stats");
    const closeDetails = document.getElementById("close-details");
    const gamesGrid = document.querySelector(".games-grid");

    const statElements = {
        health: document.getElementById("stat-health"),
        speed: document.getElementById("stat-speed"),
        shield: document.getElementById("stat-shield"),
        defense: document.getElementById("stat-defense"),
        extra: document.getElementById("stat-extra"),
    };

    gameCards.forEach(card => {
        card.addEventListener("click", () => {
            let description = card.getAttribute("data-description");
            const imgSrc = card.querySelector("img").src;

            const stats = {
                health: card.getAttribute("data-health"),
                speed: card.getAttribute("data-speed"),
                shield: card.getAttribute("data-shield"),
                defense: card.getAttribute("data-defense"),
                extra: card.getAttribute("data-extra"),
            };

            if (description) {
                description = description.replace(/<br>/g, "<br>")
                                         .replace(/<h([1-6])>/g, "<h$1>")
                                         .replace(/<\/h([1-6])>/g, "</h$1>")
                                         .replace(/<hr>/g, "<hr>");
            }

            enemyImage.src = imgSrc;
            enemyDescription.innerHTML = description;

            Object.keys(statElements).forEach(key => {
                const statValue = stats[key];
                if (statValue) {
                    if (key === "extra") {
                        statElements[key].querySelector("span").innerHTML = statValue.replace(/<br>/g, "<br>");
                    } else {
                        statElements[key].querySelector("span").textContent = statValue;
                    }
                    statElements[key].classList.remove("hidden");
                } else {
                    statElements[key].classList.add("hidden");
                }
            });

            const hasStats = Object.values(stats).some(value => value);
            if (hasStats) {
                enemyStats.classList.remove("hidden");
            } else {
                enemyStats.classList.add("hidden");
            }

            enemyDetails.classList.add("visible");
            gamesGrid.classList.add("faded");
            card.classList.add("active");
        });
    });

    closeDetails.addEventListener("click", () => {
        enemyDetails.classList.remove("visible");
        gamesGrid.classList.remove("faded");
        document.querySelector(".game-card.active").classList.remove("active");
    });

    document.querySelectorAll('.game-card').forEach(card => {
        const extraInfo = card.getAttribute('data-extra');
        if (extraInfo) {
            const formattedExtraInfo = extraInfo.replace(/<br>/g, '<br>');
            card.setAttribute('data-extra', formattedExtraInfo);
        }
    });

    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");
            const targetContent = document.getElementById(tab.getAttribute("data-tab"));
            targetContent.classList.add("active");
        });
    });
});
