// ######################################################################
// Variable declaraitons
// ######################################################################
var arrFormulaCircuits = [];
var arrFormulaPilots = [];
// ######################################################################
// STEP !: Get all races from a determine year.
// ######################################################################

//Get year selected by the user.
// var nYear = 2022

// // JBE: Build the url to get a certain year of racing.
// var szUrlFormula1 = 'https://api-formula-1.p.rapidapi.com/races?type=race&season='+ nYear;

// // JBE:Default options for the api, includes the credentials, and host to get the information
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ce45788bamshb1899499874cc3bp1c8ec3jsn1441744eec4b',
		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
	}
};

// // JBE:Fetch the information calling the api
fetch(szUrlFormula1, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    arrFormulaCircuits = [];
    // JBE:Uncomment to debug reponse from api
    // console.log("aqui", data.response)
    // console.log("aqui", data.response[1].circuit.id)
    for (var i = 0; i < data.response.length; i++) {
      if (data.response[i].status === "Completed") {
        arrFormulaCircuits.push({nRaceYearId:data.response[i].id, szRaceName:data.response[i].circuit.name});
      }
    }
    console.log('Formula 1 Repo Issues \n----------', arrFormulaCircuits);
  })
  .catch(err => console.error(err));



// // ######################################################################
// // STEP !: Get rankings from a race to get all pilots
// // ######################################################################
// //Get year selected by the user.
// var nRaceId = 1508

// // JBE: Build the url to get a certain year of racing.
// var szUrlFormula1Rankings = 'https://api-formula-1.p.rapidapi.com/rankings/races?race='+ nRaceId;

// const options2 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6ce45788bamshb1899499874cc3bp1c8ec3jsn1441744eec4b',
// 		'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
// 	}
// };

// fetch(szUrlFormula1Rankings, options2)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     arrFormulaPilots = [];
//     for (var i = 0; i < data.response.length; i++) {
//         arrFormulaPilots.push({nDriverId:data.response[i].driver.id, szDriverName:data.response[i].driver.name});
//     }
//     console.log('Formula 1 Repo Issues \n----------', arrFormulaPilots);
//   })
//   .catch(err => console.error(err));



