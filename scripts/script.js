/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} qtsNb : le nombre de mots proposés à l'utilisateur
 */
function displayScore(score, qtsNb){
	//get the zone where we write the score
	let spanScore = document.querySelector(".zoneScore span")
	//writing text
	let affichageScore = `${score} / ${qtsNb}`
	//insert text into span
	spanScore.innerText = affichageScore
}


/**
 * Function to display proposition. What the player will need to recopy
 * in the zoneProp
 * @param {string} word 
 */
function displayProp(word){
	let zoneProp = document.querySelector(".zoneProposition")
	zoneProp.innerText = word
}



/**
 * Generate and display email
 * @param {string} nom 
 * @param {string} email 
 * @param {string} score 
 */
function displayEmail(nom, email, score) {
	let mailto = `mailto:${email}?subject=Partage du score Azerty&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype!`
	location.href = mailto
}


/**
 * Takes a name in param and validate if it's in the correct format
 * here: 2 characters minimum
 * @param {string} nom 
 * @returns {boolean}
 */
function validerNom(nom){
	if (nom.length < 2)
		throw new Error(`Le nom: ${nom}, est trop petit`)
}


/**
 * Takes an email in param and validate if it's in the correct format
 * @param {string} email 
 * @returns {boolean}
 */
function validerEmail(email) {
	let emailRegExp = new RegExp("[a-z0-9.-_]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
	if (!emailRegExp.test(email))
		throw new Error(`Le courriel ${email} est invalide`)
}


function afficherMessageErreur(erreur) {
	let spanErreurMsg = document.getElementById("erreurMessage")

	if (!spanErreurMsg) {
		let popup = document.querySelector(".popup")
		spanErreurMsg = document.createElement("span")
		spanErreurMsg.id = "erreurMessage"

		popup.append(spanErreurMsg)
	}
	spanErreurMsg.innerText = erreur
}


/**
 * Focus on dealing with the form
 * @param {string} score 
 */
function gererFormulaire(score) {
	try {
		let baliseNom = document.getElementById("nom")
		let nom = baliseNom.value
		validerNom(nom)
		let baliseEmail = document.getElementById("email")
		let email = baliseEmail.value
		validerEmail(email)
		afficherMessageErreur("")
		displayEmail(nom, email, score)
	}
	catch (erreur){
		afficherMessageErreur(erreur.message)
	}

}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function launchGame(){
	
	initAddEventListenerPopup()
	let score = 0;
	let i = 0;
	let listeProp = listeMots

	let boutonValidation = document.getElementById("btnValidateWord")
	let inputEcriture = document.getElementById("inputEcriture")

	displayProp(listeProp[i])
	
	//Gestion de l'événement click sur le bouton valider
	boutonValidation.addEventListener("click", () => {
		console.log(inputEcriture.value)
		if (inputEcriture.value === listeProp[i])
			score++
		i++;
		displayScore(score, i)
		inputEcriture.value = ''
		if (listeProp[i] === undefined){
			displayProp("Le jeu est fini!")
			boutonValidation.disabled = true
		}
		else {
			displayProp(listeProp[i])

		}
	})

	//Gestion de l'événement change sur les boutons radios
	let listBtnRadio = document.querySelectorAll(".optionSource input")
	for (let index = 0; index < listBtnRadio.length; index++) {
		listBtnRadio[index].addEventListener("change", (event) => { //dans event store l'information si c'est le bouton de droite ou gauche qui a été cliqué
			//Si c'est le premier élément qui a été modifié, alors nous voulons
			//jouer avec la listeMots
			if (event.target.value === "1") { //target est la propriété où l'info est stocké, puis il faut juste appeler value
				listeProp = listeMots
			}
			else {
				listeProp = listePhrase
			}
			//et on modifie l'affichage en direct
			displayProp(listeProp[i])
		})
	}
	let form = document.querySelector("form")
	form.addEventListener("submit", (event) => {
		event.preventDefault()
		let scoreEmail = `${score} / ${i}`
		gererFormulaire(score)
	})
	displayScore(score, i)
}