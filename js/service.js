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