# Installation du répositoire sur une VM linux
Version Ubuntu 22.04.3
#### **Connection à la VM via Putty (client SSH)**


#### **Mise à jour**
```bash
apt-get update && apt-get upgrade -y
```



#### **Script de sauvegarde :**

```bash
#!/bin/bash

# Chemin vers le répertoire de sauvegarde
backup_dir="/var/backups/db_web/"

# Nom du fichier de sauvegarde 
backup_file="$backup_dir/db_backup_$(date +\%Y\%m\%d).sql"

# Nom du fichier de journal
log_file="$backup_dir/db_backup.log"

# Sauvegarde de la base de données
mysqldump -u root -p VocabulaireDB > "$backup_file"

# Enregistrement de la date dans le fichier de journal
echo "Sauvegarde effectuée le $(date)" >> "$log_file"
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


