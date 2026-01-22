document.addEventListener("DOMContentLoaded", () => {
    const setupTabContent = (tabContent) => {
        const gameCards = tabContent.querySelectorAll(".game-card");
        const enemyDetails = tabContent.querySelector("#enemy-details");
        
        if (!enemyDetails) return;

        const enemyImage = enemyDetails.querySelector("#enemy-image");
        const enemyDescription = enemyDetails.querySelector("#enemy-description");
        const enemyStats = enemyDetails.querySelector("#enemy-stats");
        const closeDetails = enemyDetails.querySelector("#close-details");
        const gamesGrid = tabContent.querySelector(".games-grid");

        const statElements = {
            health: enemyDetails.querySelector("#stat-health"),
            speed: enemyDetails.querySelector("#stat-speed"),
            shield: enemyDetails.querySelector("#stat-shield"),
            defense: enemyDetails.querySelector("#stat-defense"),
            extra: enemyDetails.querySelector("#stat-extra"),
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
                                             .replace(/<hr>/g, "<hr>")
                                             .replace(/<ul>/g, "<ul>")
                                             .replace(/<\/ul>/g, "</ul>")
                                             .replace(/<li>/g, "<li>")
                                             .replace(/<\/li>/g, "</li>");
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
            const activeCard = tabContent.querySelector(".game-card.active");
            if (activeCard) {
                activeCard.classList.remove("active");
            }
        });

        const extraInfoCards = tabContent.querySelectorAll('.game-card');
        extraInfoCards.forEach(card => {
            const extraInfo = card.getAttribute('data-extra');
            if (extraInfo) {
                const formattedExtraInfo = extraInfo.replace(/<br>/g, '<br>');
                card.setAttribute('data-extra', formattedExtraInfo);
            }
        });
    };

    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tabContent => {
        setupTabContent(tabContent);
    });

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");
            const targetContent = document.getElementById(tab.getAttribute("data-tab"));
            targetContent.classList.add("active");
            
            if (targetContent) {
                setupTabContent(targetContent);
            }
        });
    });
});
