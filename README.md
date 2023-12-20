# Installation du répositoire sur une VM linux
Version Ubuntu 22.04.3
#### **Connection à la VM via Putty (client SSH)**


#### **Mise à jour**
```bash
apt-get update && apt-get upgrade -y
```

#### **Naviguer jusqu'au répertoire de destination**
```bash
cd /chemin/destination
```

#### **Installer les différents modules**
```bash
sudo apt-get update
npm init
sudo apt-get install nodejs npm
```
```bash
npm install express --save
npm install mysql2 --save
```




#### **Cloner le répertoire Github**
```bash
git clone https://github.com/DiegoRadigues/Examen_technoweb_20342.git
```


#### **Script de sauvegarde :**
```bash
nano backup_script.sh
```

```bash
#!/bin/bash

# Chemin vers le répertoire de sauvegarde
backup_dir="/var/backups/db_web/"

# Nom du fichier de sauvegarde
backup_file="$backup_dir/db_backup_$(date +\%Y\%m\%d).sql"

# Nom du fichier de journal
log_file="$backup_dir/db_backup.log"

# Informations de connexion à la base de données
db_user="root"
db_password="mdp"
db_name="VocabulaireDB"

# Sauvegarde de la base de données
mysqldump -u "$db_user" -p"$db_password" "$db_name" > "$backup_file"

# Vérification du succès de la sauvegarde
if [ $? -eq 0 ]; then
    echo "Sauvegarde réussie le $(date)" >> "$log_file"
else
    echo "Échec de la sauvegarde le $(date)" >> "$log_file"

```

#### **Rendre le script exécutable**
```bash
chmod +x backup_script.sh
```

#### **Ouvrir le plannificateur de script**
```bash
sudo crontab -e
```

#### **Ajouter la ligne suivante**
```bash
0 0 * * * /chemin/vers/backup_script.sh
```

#### **Autoriser le port 80**
```bash
sudo ufw allow 80/tcp
```


#### **Lancer le serveur**
```bash
cd Examen_technoweb_20342/
```
```bash
node app.js
```
Doit renvoyer : Serveur démarré sur http://localhost:3000

![image](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/e076eb4f-ee19-4d3c-bdd5-e919530762b1)


#### **Utilisation de l'interface**
![Capture d’écran 2023-12-20 111011](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/614cd200-6e4c-4525-a0e7-fb0167da074d)
![Capture d’écran 2023-12-20 111107](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/d83ed08c-c229-407e-a5ba-1db013c28132)
![Capture d’écran 2023-12-20 111412](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/626a0815-a9e7-4fe4-a80c-f4bb4ac03d91)


#### **Base de données**
![Capture d’écran 2023-12-20 111732](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/d21f610e-4085-4291-b633-81585c5842b1)

#### **Problèmes**

Problème pour exporter la table 
![image](https://github.com/DiegoRadigues/Examen_technoweb_20342/assets/99732004/80475428-1272-443a-af7f-fb5a84f057ce)





