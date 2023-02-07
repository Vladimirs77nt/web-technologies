const tempC = prompt("Введите температуру по Цельсию (°С):");
const tempF = Math.round(((9 / 5) * tempC + 32) * 10) / 10;
alert(`Цельсий: ${tempC} °C, Фаренгейт: ${tempF} °F`);