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
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function launchGame(){
	
	//initAddEventListenerPopup()
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

		let baliseNom = document.getElementById("nom")
		let nom = baliseNom.value
		let baliseEmail = document.getElementById("email")
		let email = baliseEmail.value

		let scoreEmail = `${score} / ${i}`
		displayEmail(nom, email, scoreEmail)

	})

	displayScore(score, i)
}