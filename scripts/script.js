
function displayScore(score, qtsNb){
	//local var
	let message = "Votre score est de " + score + " sur " + qtsNb
	return message
}

function chooseWordsOrSentences(){
	let choix = prompt("Faites le choix entre mots ou phrases")
	while (choix !== "mots" && choix !== "phrases")
		choix = prompt("Faites le choix entre mots ou phrases")
	return choix

}

function launchGameLoop(liste){
	let score = 0;
	for (let i = 0; i < liste.length; i++)
	{
		motUtilisateur = prompt("Entrez le mot: " + liste[i])
		if (motUtilisateur === liste[i])
		{
			score++
		}
	}
	return score
}

//main function to start the game
function launchGame(){
	let choice = chooseWordsOrSentences()
	let score = 0;
	let nbQts = 0;
	if (choice === "mots")
	{
		score = launchGameLoop(listeMots)
		nbQts = listeMots.length
	}
	else //(motUtilisateur === "phrases")
	{
		score = launchGameLoop(listePhrase)
		nbQts = listePhrase.length
	}
	console.log(displayScore(score, nbQts))
}