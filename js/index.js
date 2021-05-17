
//! Получить и занести в новый ключ общее кол-во номеров в гостинице
//! Расширить в инфо об апартаментах (добавить "наличие wifi", "кухня")
//! * Добавить новый тип апартаментов (.push) 'luks'

//База данных
const dataHotel = {
	services: [
		{
			key: '<th>Общие</th>',
			content: '<td>Бесплатная парковка, Частная парковка</td>'
		},
		{
			key: '<th>Сервисы</th>',
			content: '<td>Бесплатный Wi-Fi, Экскурсионное бюро, Услуги консьержа</td>'
		},
	],
	apartaments: [
		{
			title: 'vip',
			pay: 10000,
			count: 10
		},
		{
			title: 'premium',
			pay: 5000,
			count: 3
		},
		{
			title: 'standard',
			pay: 1000,
			count: 9
		}
	]
}

//Создаем два новых, полных объекта
const publicArea = {
	key: '<th>Зоны общественного пользования</th>',
	content: '<td>Общая кухня</td>'
}
const moreService = {
	key: '<th>Разное</th>',
	content: '<td>Номера для некурящих, Семейные номера, Звукоизолированные номера, Отопление, Курение на всей территории запрещено, Кондиционер</td>'
}

//Создаем новый, пустой объект
const luxNumbers = {}

//Добавляем полные объекты
dataHotel.services.push(publicArea)
dataHotel.services.push(moreService)

//Добавляем пустой объект
dataHotel.apartaments.push(luxNumbers)

//наполняем пустой объект
dataHotel.apartaments[3].title = 'lux'
dataHotel.apartaments[3].pay = 15000
dataHotel.apartaments[3].count = 4

//Создаем функцию использующую объекты services для заполнения таблицы "Услуги"
function innerRow(inner) {
	let i = inner.slice(-1); i--
	const dataService = dataHotel.services
	let row = document.querySelector(`.${inner}`)
	row.innerHTML = dataService[i].key + dataService[i].content
	return row
}
//используя функцию - заполняем таблицу "Услуги"
innerRow('row1')
innerRow('row2')
innerRow('row3')
innerRow('row4')

//Достаем из навигации элементы выпадающего списка
//Подключаем к этим элементам счетчики из нашей базы данных
const contentVip = document.querySelector('.item-vip')
const countVip = dataHotel.apartaments[0].count

const contentPremium = document.querySelector('.item-premium')
const countPremium = dataHotel.apartaments[1].count

const contentStandard = document.querySelector('.item-standard')
const countStandard = dataHotel.apartaments[2].count

const contentLux = document.querySelector('.item-lux')
const countLux = dataHotel.apartaments[3].count

//Получаем общее количество номеров в гостинице
const countAll = countVip + countPremium + countStandard + countLux

//Определяем окончание слова "номер" в зависимости от значений в счетчиках
function counting(countEl) {
	let count = countEl
	if ((count % 100) >= 11 && (count % 100) <= 19) {
		numberTransformSt = 'ов'
	} else if ((count % 10) === 1) {
		numberTransformSt = ''
	} else if (count > 5 && count < 20) {
		numberTransformSt = 'ов'
	} else if ((count % 10) >= 2 && (count % 10) <= 4) {
		numberTransformSt = 'a'
	} else {
		numberTransformSt = 'ов'
	}
	//Соединяем слово "номер" с вычисленным окончанием
	let textAmount = (`номер${numberTransformSt}`)
	return textAmount
}

const infoAboutNumber = document.getElementById('navbarDropdownMenuLink')

//Возвращаем полученную информацию обратно в список
infoAboutNumber.innerText = (`Всего  ${counting(countAll)}: ${countAll}`)
contentVip.innerText = (`VIP: ${countVip} ${counting(countVip)}`)
contentPremium.innerText = (`Premium: ${countPremium} ${counting(countPremium)}`)
contentStandard.innerText = (`Standard: ${countStandard} ${counting(countStandard)}`)
contentLux.innerText = (`Lux: ${countLux} ${counting(countLux)}`)

