angular.module('DatesService', [])
.service('Dates', function () {
    this.getDates = [
	{
		date: '16th Dec 2016',
		venue: 'Jupiters Hotel and Casino Theatre',
		city: 'Broadbeach',
		country: 'Australia'
		},
	{
		date: '15th Dec 2016',
		venue: 'Enmore Theatre',
		city: 'Newtown',
		country: 'Australia'
		},
	{
		date: '13th Dec 2016',
		venue: 'Perth Concert Hall',
		city: 'Perth',
		country: 'Australia'
		},
	];
});

angular.module('FactsService', [])
.service('Facts', function () {
	this.facts = [
		'Only Peter and Micky appear in every episode of the TV show',
		'Davy was almost drafted by the army',
		'400 hundred musicians and actors auditioned for the Monkees TV show',
		'Micky and Michael both auditioned to play the Fonz on Happy Days',
	];
});


