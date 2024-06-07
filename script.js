const summaryListElem = document.querySelector('#summaryList')

function fetchJSON() {
    const categoryColor = {
        "Reaction": "0, 100%, 67%",
        "Memory": "39, 100%, 56%",
        "Verbal": "166, 100%, 37%",
        "Visual": "234, 85%, 45%",
    }

    fetch('data.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            summaryListElem.innerText = '';

            data.forEach(item => {
                const itemMarkup =
                    `<li class="summary-list-item" style="background-color: hsla(${categoryColor[item.category]}, 0.1)">
            <span>
              <img src=${item.icon} alt="Category icon" aria-hidden="true">
              <span class="item-name" style="color: hsl(${categoryColor[item.category]})">${item.category}</span>
            </span>
            <span class="item-score">${item.score} <span>/ 100</span></span>
          </li>`;

                summaryListElem.insertAdjacentHTML('beforeend', itemMarkup);
            })
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        });
}

fetchJSON();