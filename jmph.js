	var joueur=0;
	var casejoueur=" ";
	var fin=0;
	var victoire0=0;
	var victoire1=0;
	var victoire2=0;
	
	function changejoueur() 
	{
		joueur++; 
		if(joueur==2){
			joueur=0; 
		}
	}
	
	function affichechoix(casejoue) 
	{
		if(joueur==0) casejoueur="X";
		else casejoueur="O";
		if(casejoue==0) {
		document.tictac.case0.value=casejoueur;
		document.tictac.case0.id="joueur"+(joueur+1);
		}
		if(casejoue==1) {
		document.tictac.case1.value=casejoueur;
		document.tictac.case1.id="joueur"+(joueur+1);
		}
		if(casejoue==2) {
		document.tictac.case2.value=casejoueur;
		document.tictac.case2.id="joueur"+(joueur+1);
		}
		if(casejoue==3) {
		document.tictac.case3.value=casejoueur;
		document.tictac.case3.id="joueur"+(joueur+1);
		}
		if(casejoue==4) {
		document.tictac.case4.value=casejoueur;
		document.tictac.case4.id="joueur"+(joueur+1);
		}
		if(casejoue==5) {
		document.tictac.case5.value=casejoueur;
		document.tictac.case5.id="joueur"+(joueur+1);
		}
		if(casejoue==6) {
		document.tictac.case6.value=casejoueur;
		document.tictac.case6.id="joueur"+(joueur+1);
		}
		if(casejoue==7) {
		document.tictac.case7.value=casejoueur;
		document.tictac.case7.id="joueur"+(joueur+1);
		}
		if(casejoue==8) {
		document.tictac.case8.value=casejoueur;
		document.tictac.case8.id="joueur"+(joueur+1);
		}
	}
	function terrain() {
		var airejeu=new Array();
		airejeu[0]=document.tictac.case0.value;
		airejeu[1]=document.tictac.case1.value;
		airejeu[2]=document.tictac.case2.value;
		airejeu[3]=document.tictac.case3.value;
		airejeu[4]=document.tictac.case4.value;
		airejeu[5]=document.tictac.case5.value;
		airejeu[6]=document.tictac.case6.value;
		airejeu[7]=document.tictac.case7.value;
		airejeu[8]=document.tictac.case8.value;
		return airejeu;
	}
	
	function nouveauJeu() {
		document.tictac.case0.value=" ";
		document.tictac.case1.value=" ";
		document.tictac.case2.value=" ";
		document.tictac.case3.value=" ";
		document.tictac.case4.value=" ";
		document.tictac.case5.value=" ";
		document.tictac.case6.value=" ";
		document.tictac.case7.value=" ";
		document.tictac.case8.value=" ";
		document.tictac.case0.id="rien";
		document.tictac.case1.id="rien";
		document.tictac.case2.id="rien";
		document.tictac.case3.id="rien";
		document.tictac.case4.id="rien";
		document.tictac.case5.id="rien";
		document.tictac.case6.id="rien";
		document.tictac.case7.id="rien";
		document.tictac.case8.id="rien";
		document.tictac.tourjeu.value="A vous le tour! ";
		document.tictac.tourjeu.id="joueurinfo"+(joueur+1);
		afficheScore();
		termine=0;
		if(joueur==1) ;
	}
	
	function pasVictoire(jeu,lettre)
	{
		var fin=-1;
		for(var i=0;i!=3;i++)
		{

			/*Vérification des lignes*/
			// - Première cellule de la ligne
			if(airejeu[i*3]!=airejeu[i*3+1]&&airejeu[i*3+1]==airejeu[i*3+2]&&airejeu[i*3]==" "&&airejeu[i*3+1]==lettre) fin=i*3;
			// - Deuxième cellule de la ligne
			if(airejeu[i*3]!=airejeu[i*3+1]&&airejeu[i*3]==airejeu[i*3+2]&&airejeu[i*3+1]==" "&&airejeu[i*3]==lettre) fin=i*3+1;
			// - Trosième cellule de la ligne
			if(airejeu[i*3]==airejeu[i*3+1]&&airejeu[i*3]!=airejeu[i*3+2]&&airejeu[i*3+2]==" "&&airejeu[i*3]==lettre) fin=i*3+2;

			/*Vérification des colonnes*/
			// - Première cellule de la colonne
			if(airejeu[i]!=airejeu[i+3]&&airejeu[i+3]==airejeu[i+6]&&airejeu[i]==" "&&airejeu[i+3]==lettre) fin=i;
			// - Deuxième cellule de la colonne
			if(airejeu[i]!=airejeu[i+3]&&airejeu[i]==airejeu[i+6]&&airejeu[i+3]==" "&&airejeu[i]==lettre) fin=i+3;
			// - Trosième cellule de la colonne
			if(airejeu[i]==airejeu[i+3]&&airejeu[i]!=airejeu[i+6]&&airejeu[i+6]==" "&&airejeu[i]==lettre) fin=i+6;
			}
			
			/*Vérification des diagonales*/
			if(airejeu[0]!=airejeu[4]&&airejeu[4]==airejeu[8]&&airejeu[0]==" "&&airejeu[4]==lettre) fin=0;
			if(airejeu[0]!=airejeu[4]&&airejeu[0]==airejeu[8]&&airejeu[4]==" "&&airejeu[0]==lettre) fin=4;
			if(airejeu[0]==airejeu[4]&&airejeu[0]!=airejeu[8]&&airejeu[8]==" "&&airejeu[0]==lettre) fin=8;
			if(airejeu[2]!=airejeu[4]&&airejeu[4]==airejeu[6]&&airejeu[2]==" "&&airejeu[4]==lettre) fin=2;
			if(airejeu[2]!=airejeu[4]&&airejeu[2]==airejeu[6]&&airejeu[4]==" "&&airejeu[2]==lettre) fin=4;
			if(airejeu[2]==airejeu[4]&&airejeu[2]!=airejeu[6]&&airejeu[6]==" "&&airejeu[2]==lettre) fin=6;

			return fin;
	}
	
	function afficheScore()
	{
		document.score.info1.value=victoire1;
		document.score.info2.value=victoire2;
		document.score.info3.value=victoire0;
	}
	function afficheVainqueur(vainqueur) 
	{
		
		var phrase1="Bravo A! Vous m'avez gagné!"
		var phrase2="Bravo B! Vous m'avez gagné!";
		var phrase3="Personne n'a gagné!";
		if(vainqueur=="X"||vainqueur=="O") {
		if(vainqueur=="X") {document.tictac.tourjeu.value=phrase1;victoire1++;document.tictac.tourjeu.id="verdict1"; }
		else {document.tictac.tourjeu.value=phrase2;victoire2++;document.tictac.tourjeu.id="verdict2";}

		} else {
		
		document.tictac.tourjeu.value=phrase3;
		document.tictac.tourjeu.id="verdictnul";
		victoire0++;
		}
		
		termine=1;
	}
	function victoire(airejeu)
	{
		var fin=new Array();
		fin[0]=0;
		fin[1]=0;
			for(var i=0;i!=3;i++) 
			{
				/*Vérification des lignes*/
				if(airejeu[i*3]==airejeu[i*3+1]&&airejeu[i*3]==airejeu[i*3+2]&&airejeu[i*3]!=" ") 
				{
					fin[0]=1;fin[1]=airejeu[i*3];
				}
				/*Vérification des colonnes*/
				if(airejeu[i]==airejeu[i+3]&&airejeu[i]==airejeu[i+6]&&airejeu[i]!=" ")
				{
					fin[0]=1;fin[1]=airejeu[i];
				}
			}
			/*Vérification des diagonales*/
			if(airejeu[0]==airejeu[4]&&airejeu[0]==airejeu[8]&&airejeu[0]!=" ") 
			{
				fin[0]=1;fin[1]=airejeu[0];
			}
			if(airejeu[2]==airejeu[4]&&airejeu[2]==airejeu[6]&&airejeu[2]!=" ") 
			{
				fin[0]=1;fin[1]=airejeu[2];
			}
			/*S'il n'y a pas de gagnant, il vérifie si la grille est pleine*/
			if(fin[0]==0)
			{
			var nbvides=0;
			for(var w=0;w!=9;w++) if(airejeu[w]==" ") nbvides++;
			if(nbvides==0) fin[0]=1;
			}
		return fin;
	}
	function afficheTrA(casejoueur)
	{	
			document.tictac.tourjeu.value="C'est ton tour Joueur B !";
			document.tictac.tourjeu.id="joueurA";		
	}
	function afficheTrB(casejoueur)
	{	
			document.tictac.tourjeu.value="C'est ton tour Joueur A !";
			document.tictac.tourjeu.id="joueurB";		
	}
	function lancementJeu()
	{
		nouveauJeu();
	}
	function game(casejoue)
	{
		
		if(termine==0) 
		{
			var airejeu=terrain();
			
			if(airejeu[casejoue]==" ")
			{
				affichechoix(casejoue);
				airejeu=terrain();
				changejoueur();
				var fin=victoire(airejeu);
				if(casejoueur=="X"){
					
				afficheTrA();
				}else afficheTrB();
				if(fin[0]==1) afficheVainqueur(fin[1]);
				afficheScore();
				
			} 
		} else document.tictac.tourjeu.value="Cliquez sur \"Jouer\ pour rejouer!";
	}
	
	