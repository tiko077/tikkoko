document.getElementById('flight-booking-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем данные из формы
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengerCount = document.getElementById('passenger-count').value;

    // Простой расчет цены
    const basePrice = 10000; // Базовая цена билета в условных единицах
    const pricePerPassenger = basePrice; // Цена за одного пассажира
    const totalPrice = pricePerPassenger * passengerCount;

    // Отображаем детали бронирования
    document.getElementById('summary-from').textContent = from;
    document.getElementById('summary-to').textContent = to;
    document.getElementById('summary-departure').textContent = departureDate;
    document.getElementById('summary-return').textContent = returnDate ? returnDate : 'Не указано';
    document.getElementById('summary-passengers').textContent = passengerCount;
    document.getElementById('summary-price').textContent = `${totalPrice} ТГ`;

    // Показываем блок с деталями
    document.getElementById('booking-summary').classList.remove('hidden');
});
