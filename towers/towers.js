document.querySelectorAll('.tabber').forEach(tabber => {
    const tabs = tabber.querySelectorAll('.tab');
    const tabContents = tabber.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            tabber.querySelector(`#${targetTab}`).classList.add('active');
        });
    });
    tabber.querySelectorAll('.inner-tab').forEach(innerTab => {
        innerTab.addEventListener('click', function () {
            const targetInnerTab = this.getAttribute('data-inner-tab');
            const parentTabContent = this.closest('.tab-content');
            parentTabContent.querySelectorAll('.inner-tab').forEach(it => it.classList.remove('active'));
            parentTabContent.querySelectorAll('.inner-tab-content').forEach(itc => itc.classList.remove('active'));
            this.classList.add('active');
            parentTabContent.querySelector(`#${targetInnerTab}`).classList.add('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
const tables = document.querySelectorAll("table");
tables.forEach(table => {
    const rows = table.querySelectorAll("tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        cells.forEach(cell => {
            if (cell.textContent.trim() === "No" || cell.textContent.trim() === "N/A") { // Replaces "No" and "N/A" to N/A with grey text
                cell.innerHTML = '<span style="color: grey;">N/A</span>';
            }
        });
    });
});
});