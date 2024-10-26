/*
3-  Dans cette tâche, vous allez :
•	Dans un premier temps, demander au système de fichiers de créer un fichier nommé « welcome.txt » contenant une ligne « Hello Node ».
•	Dans un deuxième temps, créer un programme qui lit et console.log les données de hello.txt

*/

var fs = require('fs');  
//Dans un premier temps, demander au système de fichiers de créer un fichier nommé « welcome.txt » contenant une ligne « Hello Node ».

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        
        return console.error(err);
    }
    console.log(' welcome.txt créé avec succès !');
}
);

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Contenu du fichier :');
    console.log(data);
});
