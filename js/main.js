getMainMenu();

const footer = document.getElementById('main-footer');
footer.innerHTML = getFooter();

function getMainMenu() {
    let currentPath = window.location.href;
    fetch('./src/config/menu.json').
    then(response => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData);
        let menuContent = '';
        for (let menuItem of jsonData) {
            let hyperlink = `<a href="${menuItem.url}">${menuItem.name}</a>`;
            if (currentPath.includes(menuItem.url)) {
                hyperlink = `<a>${menuItem.name}</a>`;
            }
            menuContent += `<li class="menu-item">${hyperlink}</li>`;
        }
        menuContent = '<nav><ul>' + menuContent + '</ul></nav>';

        let mainMenu = document.getElementById('main-menu');
        mainMenu.innerHTML = menuContent;
    });
}

function getFooter() {
    let startYear = '2023';
    let currentYear = new Date().getFullYear().toString();
    let copyRightYear = (startYear == currentYear) ? currentYear : startYear + ' - ' + currentYear; 
    return `
    &copy; ${copyRightYear}  Sarath Sivadasan - All Rights Reserved
    `;
}

const mainContent = document.getElementsByTagName('main');
