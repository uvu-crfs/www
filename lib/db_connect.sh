pass=$(cat database.json | grep password | cut -d '"' -f4)
mysql crfs -u crfs_user --password=$pass
