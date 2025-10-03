document.addEventListener("DOMContentLoaded", () => {
  const mapRF = document.getElementById("map-rf");
  const mapBY = document.getElementById("map-by");
  const scenarioImage = document.getElementById("scenario-image");
  const scenarioText = document.getElementById("scenario-text");
  const regionModal = document.getElementById("regionModal");
  const regionInfoBox = document.getElementById("regionInfo");
  // Данные о регионах
  const regionInfo = {
    "RU-MOW": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-VOR": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KDA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 370 га</p> <p>2035 г. — 1170 га</p>",
  "RU-SVE": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-TVE": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KIR": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-ME": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-ALT": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 168 га</p> <p>2035 г. — 968 га</p>",
  "RU-IVA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-AL": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 262 га</p> <p>2035 г. — 1062 га</p>",
  "RU-CU": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 363 га</p> <p>2035 г. — 1163 га</p>",
  "RU-VLA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-TA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-MOS": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-OMS": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-ORL": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-DA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-ORE": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-UD": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KB": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-AD": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KHA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-SAM": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-TAM": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-BA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-RYA": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KOS": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-NIZ": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-KRS": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-PNZ": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "RU-BRY": "<p><b>Площадь закладки:</b></p> <p>2025 г. — 160 га</p> <p>2035 г. — 960 га</p>",
  "BY-MI": "Минская область — центр промышленности и науки",
  "BY-BR": "Брестская область — аграрный регион"
};
  // Регионы для каждого сценария
  const scenarioRegions = {
  1: ["RU-CU","RU-ME","RU-AL","RU-ALT","RU-BRY","RU-MOS","RU-MOW","RU-PNZ","RU-KIR","RU-VOR","RU-KRS"],
  2: ["RU-SVE","RU-KOS","RU-VLA","RU-IVA","RU-NIZ","RU-ORL","RU-RYA","RU-BA","RU-TA","RU-KDA"],
  3: ["RU-TVE","RU-OMS","RU-UD","RU-ORE","RU-SAM","RU-NIZ","RU-TAM","RU-KHA","RU-AD","RU-DA","RU-KB"],
  4: ["BY-BR","BY-HO"]
};
  // Функция показа сценария
  window.showScenario = function(num) {
    // Сброс карт
    if (num === 4) {
      mapRF.style.display = "none";
      mapBY.style.display = "block";
      scenarioImage.style.display = "none";
      scenarioText.style.display = "block";
      scenarioText.style.textAlign = "center";
      scenarioText.maxWidth = "900px";
      scenarioText.margin = "16px auto";
      scenarioText.innerHTML = `
      <p>
      Развитие международных связей, расширение сети дистрибуции и поиск новых рынков сбыта укрепят позиции России
на международном рынке, а внедрение строгого контроля качества на всех этапах — от производства до торговли —
обеспечит высокий стандарт продукции ХПП. При этом реализация этих планов невозможна без комплексного
подхода, включающего разработку специализированных программ и использование экономических инструментов,
таких как налоговые льготы, субсидии и инвестиционные стимулы
      </p>
      <p>
        Источник 1: <a href="https://belta.by/regions/view/zelenoe-zoloto-antonovichej-417729-2020/" target="_blank">belta.by</a><br>
        Источник 2: <a href="https://profapkbrest.by/bizon-vklad-v-kachestvo-belorusskogo-piva/" target="_blank">profapkbrest.by</a>
      </p>
    `;
    } else {
      mapRF.style.display = "block";
      mapBY.style.display = "none";
      scenarioImage.style.display = "block";
      scenarioImage.src = `images/scenario${num}.png`;
      scenarioText.style.display = "none";
    }
     // Сбрасываем все регионы
    const allRegions = document.querySelectorAll("svg path");
    allRegions.forEach(r => {
      r.style.fill = "#d9e6c5";
      r.style.cursor = "default";
      r.onclick = null;
    });
    scenarioRegions[num].forEach(id => {
      const region = document.getElementById(id);
      if (region) {
        region.style.fill = "#6c7a5a";
        region.style.cursor = "pointer";
        region.onclick = () => {
      const regionTitle = document.getElementById("regionTitle");
      if (regionTitle) {
        regionTitle.textContent = region.getAttribute("title") || "Регион";
      }
      regionInfoBox.innerHTML = regionInfo[id] || "Нет информации";
      regionModal.style.display = "block";
    };
  }
});
  };
  // Закрытие модального окна
  window.closeRegionModal = function() {
    regionModal.style.display = "none";
  };
  // Стартовый сценарий
  showScenario(1);
});
// модальное меню
const menuModal = document.getElementById("menuModal");
document.getElementById("menuBtn").onclick = () => menuModal.style.display = "block";
function closeMenu() { menuModal.style.display = "none"; }
// атлас
const atlasModal = document.getElementById("atlasModal");
const atlasImage = document.getElementById("atlasImage");
let atlasIndex = 1;
let atlasTimer;
document.getElementById("atlasBtn").onclick = () => {
  atlasModal.style.display = "block";
  startAtlas();
};
function closeAtlas() {
  atlasModal.style.display = "none";
  clearInterval(atlasTimer);
}
function showAtlas(index) {
  atlasImage.src = "images/atlas" + index + ".png";
}
function nextAtlas() {
  atlasIndex = atlasIndex % 20 + 1;
  showAtlas(atlasIndex);
}
function prevAtlas() {
  atlasIndex = (atlasIndex - 2 + 20) % 20 + 1;
  showAtlas(atlasIndex);
}
function startAtlas() {
  atlasIndex = 1;
  showAtlas(atlasIndex);
  atlasTimer = setInterval(nextAtlas, 15000);
}
