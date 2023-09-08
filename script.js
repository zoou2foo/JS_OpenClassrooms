const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrase = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score = 0

function returnMsgScore(score, qtsNb){
	let message = "Votre score est de " + score + " sur " + qtsNb
	return message
}

let choix = prompt("Faites le choix entre mots ou phrases")
while (choix !== "mots" && choix !== "phrases")
	choix = prompt("Faites le choix entre mots ou phrases")
if (choix === "mots")
{
	for (let i = 0; i < 3; i++)
	{
		motUtilisateur = prompt("Entrez le mot " + listeMots[i])
		if (motUtilisateur === listeMots[i])
		{
			//console.log("Bravo!")
			score++
		}
		// else
		// 	console.log("Vous avez fait une faute de frappe")
	}
	console.log(returnMsgScore(score, listeMots.length))
	//console.log("Votre score est de " + score + " sur " + listeMots.length)
}
else //(motUtilisateur === "phrases")
{
	for (let i = 0; i < 3; i++)
	{
		motUtilisateur = prompt("Entrez la phrase: " + listePhrase[i])
		if (motUtilisateur === listePhrase[i])
		{
			//console.log("Bravo!")
			score++
		}
		// else
		// 	console.log("Vous avez fait une faute de frappe")
	}
	console.log(returnMsgScore(score, listePhrase.length))
	//console.log("Votre score est de " + score + " sur " + listePhrase.length)
}
