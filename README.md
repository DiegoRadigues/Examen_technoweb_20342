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

# Nom du fichier de sauvegarde (inclut la date)
backup_file="$backup_dir/db_backup_$(date +\%Y\%m\%d).sql"

# Nom du fichier de journal
log_file="$backup_dir/db_backup.log"

# Informations de connexion à la base de données MySQL
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


