const data = {
  RU: [
    {
      country: "Россия",
      count: "144500000",
      cities: [
        {
          name: "Рязань",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Москва",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Санкт-Петербург",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Краснодар",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Екатеринбург",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Ростов-на-Дону",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Воронеж",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Германия",
      count: 82175684,
      cities: [
        {
          name: "Берлин",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Мюнхен",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Франкфурт-на-Майне",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Кёльн",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "Англия",
      count: 53012456,
      cities: [
        {
          name: "Лондон",
          count: " 8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Манчестер",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Эдинбург",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Бристоль",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  EN: [
    {
      country: "Russia",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moscow",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "St Petersburg",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Yekaterinburg",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostov-on-Don",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Voronezh",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Germany",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Munich",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "frankfurt",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Cologne",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "United Kingdom",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  DE: [
    {
      country: "Russland",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moskau",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Saint Petersburg",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Jekaterinburg",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostow",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Woronesch",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Deutschland",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "München",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Frankfurt",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Köln",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "England",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
};
("use strict");
let dataLang;
let langs;
const renderListDefault = () => {
  const searchInput = document.querySelector("#select-cities");
  const list = document.querySelector(".dropdown-lists__list--default");
  const listDefault = document.querySelector(
    ".dropdown-lists__list--default>.dropdown-lists__col"
  );
  if (listDefault.textContent !== "") {
    listDefault.textContent = "";
  }
  if (searchInput.value.trim() !== "") {
    return;
  }
  list.style.display = "block";
  dataLang.forEach((item) => {
    let cities, country, count;

    for (let value in item) {
      if (value === "country") {
        country = item[value];
      } else if (value === "cities") {
        cities = item[value];
      } else if (value === "count") {
        count = item[value];
      }
    }
    const blockDefault = document.createElement("div");
    blockDefault.classList.add("dropdown-lists__countryBlock");
    blockDefault.innerHTML = `
		<div class="dropdown-lists__total-line">
    <div class="dropdown-lists__country">${country}</div>
    <div class="dropdown-lists__count">${count}</div>
    </div>`;

    let arr = selectSitiesCount(cities);
    arr = arr.slice(0, 3);

    if (langs === "RU" && item.country === "Россия") {
      listDefault.prepend(blockDefault);
    } else if (langs === "EN" && item.country === "United Kingdom") {
      listDefault.prepend(blockDefault);
    } else if (langs === "DE" && item.country === "Deutschland") {
      listDefault.prepend(blockDefault);
    } else {
      listDefault.append(blockDefault);
    }
    cities.forEach((item) => {
      arr.forEach((i) => {
        if (+item.count === i) {
          blockDefault.insertAdjacentHTML(
            "beforeend",
            `
						<div class="dropdown-lists__line" data-path-link="${item.link}">
              <div class="dropdown-lists__city">
                ${item.name}
              </div>
              <div class="dropdown-lists__count">${item.count}</div>
            </div>
					`
          );
        }
      });
    });
  });
};

// сортировка массива входного по убыванию
const selectSitiesCount = (arr) => {
  let newArr = arr.map((item) => +item.count);
  newArr = newArr.sort(function compareNumbers(a, b) {
    return b - a;
  });

  return newArr;
};
const renderListSelect = (t) => {
  const listSelect = document.querySelector(".dropdown-lists__list--select");
  const listSelectBlock = listSelect.querySelector(".dropdown-lists__col");
  const block = document.querySelector(".dropdown");
  block.style.overflowX = "hidden";
  if (
    listSelect.style.display === "block" &&
    t.closest(".dropdown-lists__list--select")
  ) {
    listSelectBlock.innerHTML = "";
    listSelect.style.display = "none";
    return;
  }
  listSelectBlock.innerHTML = "";
  let city;
  if (t.classList.contains("dropdown-lists__country")) {
    city = t.textContent;
  } else if (t.classList.contains("dropdown-lists__count")) {
    city = t.previousElementSibling.innerText;
  } else if (t.classList.contains("dropdown-lists__total-line")) {
    city = t.querySelector(".dropdown-lists__country").textContent;
  }

  listSelect.style.display = "block";

  const blockSelect = document.createElement("div");
  blockSelect.classList.add("dropdown-lists__countryBlock");
  dataLang.forEach((item) => {
    if (item.country === city) {
      listSelectBlock.insertAdjacentHTML(
        "beforeend",
        `<div class="dropdown-lists__total-line">
          <div class="dropdown-lists__country">${item.country}</div>
          <div class="dropdown-lists__count">${item.count}</div>
        </div>
			`
      );
      item.cities.forEach((elem) => {
        listSelectBlock.insertAdjacentHTML(
          "beforeend",
          `<div class="dropdown-lists__line" data-path-link="${elem.link}">
            <div class="dropdown-lists__city">${elem.name}</div>
            <div class="dropdown-lists__count">${elem.count}</div>
          </div>`
        );
      });
    }
  });
  const animation = requestAnimationFrame(anim);
  function anim() {
    let count = 0;
    const timer = setInterval(() => {
      if (count < block.scrollWidth) {
        count += 10;
        block.scrollLeft = count;
      } else {
        block.scrollLeft = block.scrollWidth;
        clearInterval(timer);
        cancelAnimationFrame(animation);
      }
    }, 10);
  }
  block.scrollTop = 0;
};
const search = () => {
  const searchInput = document.getElementById("select-cities");
  const listSearch = document.querySelector(
    ".dropdown-lists__list--autocomplete"
  );
  const listSearchBlock = listSearch.querySelector(
    ".dropdown-lists__countryBlock"
  );
  const listDefault = document.querySelector(".dropdown-lists__list--default"),
    listSelect = document.querySelector(".dropdown-lists__list--select"),
    buttonWiki = document.querySelector(".button");

  listSearchBlock.innerHTML = "";
  listDefault.style.display = "none";
  listSelect.style.display = "none";
  listSearch.style.display = "block";
  dataLang.forEach((item) => {
    item.cities.forEach((city) => {
      if (
        searchInput.value.toLowerCase() ===
          city.name.slice(0, searchInput.value.length).toLowerCase() &&
        searchInput.value.trim()
      ) {
        listSearchBlock.insertAdjacentHTML(
          "beforeend",
          `
          <div class="dropdown-lists__line" data-path-link="${city.link}">
            <div class="dropdown-lists__city">${city.name}</div>
            <div class="dropdown-lists__count">${city.count}</div>
          </div>
        `
        );
      }
    });
  });
  if (listSearchBlock.childNodes.length === 0) {
    listSearchBlock.innerHTML =
      '<div class="dropdown-lists__line">Ничего не найдено</div>';
  }
  if (!searchInput.value.trim()) {
    buttonWiki.setAttribute("disabled", true);
    buttonWiki.setAttribute("href", "#");

    listSearch.style.display = "none";
    listDefault.style.display = "block";
  }
};
const includePuthButton = (target) => {
  const createCloseBtn = () => {
    const input = document.getElementById("select-cities");
    input.focus();
    input.value = target
      .querySelector(".dropdown-lists__city")
      .textContent.trim();
    const buttonClose = document.querySelector(".close-button");
    buttonClose.style.display = "block";
    input.append();
  };
  if (!target.classList.contains("dropdown-lists__line")) {
    target = target.parentElement;
  }
  const buttonWiki = document.querySelector(".button");
  const puth = target.dataset.pathLink;
  buttonWiki.setAttribute("href", puth);
  buttonWiki.setAttribute("disabled", false);
  createCloseBtn();
  search();
};
// получение данных
const dataRetrieval = (lang) => {
  fetch(`http://localhost:3000/${lang}`)
    .then((responce) => {
      if (responce.status !== 200) {
        throw new Error("status network not 200");
      }
      return responce.json();
    })
    .then((responce) => {
      localStorage.setItem(lang, JSON.stringify(responce));
      dataLang = responce;
      loaderDelete();
    })
    .catch((error) => {
      console.error(error);
    });
};
const createLoader = () => {
  const loader = document.createElement("div");
  loader.classList.add("overlay-loader");
  loader.innerHTML = `
      <div class="loader">
        <div class="colu col_1"></div>
        <div class="colu col_2"></div>
        <div class="colu col_3"></div>
        <div class="colu col_4"></div>
        <div class="colu col_5"></div>
        <div class="colu col_6"></div>
        <div class="colu col_7"></div>
        <div class="colu col_8"></div>
      </div>
    `;
  document.body.append(loader);
};
const loaderDelete = () => {
  const loader = document.querySelector(".overlay-loader");
  loader.remove();
};
const init = () => {
  const getLang = () => {
    if (document.cookie) {
      const regLang = /(RU)|(EN)|(DE)/;
      const val = document.cookie.match(regLang)[0];
      dataLang = JSON.parse(localStorage.getItem(val));
      loaderDelete();
      langs = val;
      return;
    }
    const lang = prompt("Введите вашу локаль: RU, EN или DE");
    const regLang = /(RU)|(EN)|(DE)/;
    document.cookie = `lang=${lang}`;
    const val = document.cookie.match(regLang)[0];
    langs = val;
    dataRetrieval(val);
  };
  createLoader();
  getLang();

  const searchInput = document.getElementById("select-cities");
  searchInput.addEventListener("click", renderListDefault);
  searchInput.addEventListener("input", search);
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".dropdown-lists__line")) {
      includePuthButton(target);
    }
    if (target.closest(".dropdown-lists__total-line")) {
      renderListSelect(target);
    }
    if (target.closest(".close-button")) {
      const buttonWiki = document.querySelector(".button"),
        closeButton = document.querySelector(".close-button"),
        listRemoved = document.querySelector(
          ".dropdown-lists__list--autocomplete"
        );
      searchInput.value = "";
      closeButton.style.display = "none";
      listRemoved.style.display = "none";
      renderListDefault();
      buttonWiki.setAttribute("href", "#");
      buttonWiki.setAttribute("disabled", true);
    }
  });
};

init();
