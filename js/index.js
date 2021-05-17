

// 1 - без окончания
// 2,3,4 - а
// 5 - 20 - ов
// 21, без окончания
// 22, 23, 24 - а
// 25 - 30 - ов
// 31 - без окончания
// 32-34 - а
// 35-40 - ов 
// 101 - номер
//111-119 - дает ов
//211-219 - дает ов
//101
const publicArea = {
	key: '<th>Зоны общественного пользования</th>',
	content: '<td>Общая кухня</td>'
}
const moreService = {
	key: '<th>Разное</th>',
	content: '<td>Номера для некурящих, Семейные номера, Звукоизолированные номера, Отопление, Курение на всей территории запрещено, Кондиционер</td>'
}

const luxNumbers = {
	title: 'lux',
	pay: 10000,
	count: 11
}

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
		// {
		// 	title:
		// 	pay: 
		// 	count: 
		// }
	]
}

dataHotel.services.push(publicArea)
dataHotel.services.push(moreService)

// dataHotel.apartaments[3].title

// console.log(dataHotel.apartaments[3].title)

const dataService = dataHotel.services
function innerRow(inner) {
	let i = inner.slice(-1); i--
	let row = document.querySelector(`.${inner}`)
	row.innerHTML = dataService[i].key + dataService[i].content
	return row
}
innerRow('row1')
innerRow('row2')
innerRow('row3')
innerRow('row4')

const contentVip = document.querySelector('.item-vip')
const countVip = dataHotel.apartaments[0].count

const contentPremium = document.querySelector('.item-premium')
const countPremium = dataHotel.apartaments[1].count

const contentStandard = document.querySelector('.item-standard')
const countStandard = dataHotel.apartaments[2].count

// const count = countVip + countPremium + countStandard
const count = countVip + countPremium + countStandard
if ((count % 100) >= 11 && (count % 100) <= 19) {
	numberTransformSt = 'ов'
} else if ((count % 10) === 1) {
	numberTransformSt = '' 
} else if (count > 5 && count < 20) {
	numberTransformSt = 'ов'
} else if ((count % 10) >=2 && (count % 10) <=4) {
	numberTransformSt = 'a'
} else {
	numberTransformSt = 'ов'
}
let textAmount = `номер${numberTransformSt}`

const infoAboutNumber = document.getElementById('navbarDropdownMenuLink')
infoAboutNumber.innerText = (`Свободные номера: ${count} номер${numberTransformSt}`)
contentVip.innerText = (`VIP ${countVip}: номер${numberTransformSt}`)
contentPremium.innerText = (`Premium ${countPremium}: номер${numberTransformSt}`)
contentStandard.innerText = (`Standard ${countStandard}: номер${numberTransformSt}`)


const date = Number(prompt('!!'))
console.log(count)
// Получить и занести в новый ключ общее кол-во номеров в гостинице
// Расширить в инфо об апартаментах (добавить "наличие wifi", "кухня")
// * Добавить новый тип апартаментов (.push) 'luks'

// const date = Number(prompt('!!'))
// const key = 'first'
// const human = {
// 	name: 'Vasya',
// 	age: null,
// 	education: ['School', 'University'],
// 	skills: {
// 		works: '',
// 		personal: ''
// 	}
// }
// //Проверить что если human имеет скилл пунктуальный в личных х-ках, 
// // то добавить этот скилл в рабочие качества
// human.skills.personal = 'punctual'
// human.amountEd = human.education.length
// human.age = date
// if (human.skills.personal === 'punctual') {
// 	human.skills.works = 'punctual'
// }
// console.log(human)

// function transformWordEnd(word, count, sex) {
// 	let endWord = null
// 	let lastCount = count % 10

// const endWord = {
// 	empty: '',
// 	first: '',
// 	second: ''
// }
// 	endWord.third = 'Hello'

// 	if (sex === 'men') {

// 	} else (sex === 'women') {

// 	}

// 	if (count > 5 && count < 20) {
// 		endWord = endWord.second
// 	} else if ((count % 100) >= 11 && (count % 100) <= 19) {
// 		endWord = endWord.second
// 	} else if (lastCount === 1) {
// 		endWord = endWord.empty
// 	} else if (lastCount >= 2 && lastCount <= 4) {
// 		endWord = endWord.first
// 	} else {
// 		endWord = endWord.second
// 	}
// 	const text = word + endWord
// 	return text
// }
// console.log(transformWordEnd("коза", 200, 'women'))

// const textSt = `номер${numberTransformSt}`
// console.log(`В нашем отеле есть ${data.apartaments[0].count} ${transformWordEnd("номер", data.apartaments[0].count)} класса ${transformWordEnd("номер", data.apartaments[2].count)} и ${data.apartaments[2].count} ${textSt} класса ${data.apartaments[2].title}`)
// //В нашем отеле есть * номеров класса "vip" и * номеров класса "standard"

// const news = [
// 	{
// 		name: 'News 1',
// 		description: 'Text1'
// 	},
// 	{
// 		name: 'News 2',
// 		description: 'Text2'
// 	},
// 	{
// 		name: 'News 3',
// 		description: 'Text3'
// 	},
// ]
// const step1 = document.getElementById('step1')
// const step2 = document.getElementById('step2')
// const step3 = document.getElementById('step3')
// const step4 = document.getElementById('step4')
// const step5 = document.getElementById('step5')

// const loading = prompt('Are you loading data? (Y/N)')

// if (loading === 'Y') {
// 	step1.innerHTML = borsh[0]
// 	step1.style.color = 'red'
// 	step2.innerHTML = borsh[1]
// 	step2.style.padding = '20px'
// 	step3.innerHTML = borsh[2]
// 	step3.style.color = 'yellow'
// 	step4.innerHTML = borsh[3]
// 	step4.style.color = 'green'
// 	step5.innerHTML = borsh[4]
// 	step5.style.color = 'lightblue'
// } else {
// 	console.log('False')
// }
