const timeline = document.getElementById('timeline');

getTimeline();

function getTimeline() {
    fetch('./assets/config/timeline.json').
    then(response => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData);
        let index = 0;
        let timelineData = '';
        for(let data of jsonData) {
            let snapshot = "";
            if (index%2 == 0) {
                snapshot += `
                <div class='timeline-snapshot'>
                   <div class="timeline-img right"><img src="${data.image}"></div>
                   <div class="year">
                        <div class="year-text"><p>${data.year}</p></div>
                    </div>
                    <div class="timeline-text">
                        <div class="text">${data.text}</div>
                    </div>
                </div>
               `;
            } else {
                snapshot += `
                <div class='timeline-snapshot'>
                    <div class="timeline-text">
                        <div class="text">${data.text}</div>
                    </div>
                   <div class="year">
                        <div class="year-text"><p>${data.year}</p></div>
                    </div>
                    <div class="timeline-img left"><img src="${data.image}"></div>
                </div>
               `;
            }
            index++;
            if (index < jsonData.length) {
                snapshot += `
                <div class="separator">
                    <div class="left-separator">
                    </div>
                    <div class="left-separator">
                    </div>
                </div>
               `;
            }
            timelineData += snapshot;
        }
        timeline.innerHTML = timelineData;
    });
}