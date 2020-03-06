const people = [{
		name: 'Bob',
		address: '468 Holland Avenue',
		age: 25,
		email: 'bob@holland.com'
	},
	{
		name: 'Sarah',
		address: '14 Flower Street',
		age: 32,
		email: 'sarah@flowers.com'
	},
	{
		name: 'David',
		address: '18 Jaybird Road',
		age: 45,
		email: 'david@jbird.com'
	},
	{
		name: 'Jeff',
		address: '66 Alice Road',
		age: 17,
		email: 'jeff@hotmail.com'
	},
];

const nameItems = makeNameList();

nameItems.forEach(item => {
	document.getElementById('names').appendChild(item);
});


function makeNameList() {
	const nameList = [];
	people.forEach(person => {
		const nameListItem = document.createElement('li');
		nameListItem.innerHTML = `<p>${person.name}</p>`;
		nameListItem.addEventListener('click', personItem => {
			const detailsPane = document.getElementById('details');
			detailsPane.innerHTML = `<p>Name: ${person.name}</p>
							<p>Address: ${person.address}</p>
							<p>Age: ${person.age}</p>
							<p>Email: ${person.email}</p>`;
		});
		nameList.push(nameListItem);
	});
	return nameList;
}