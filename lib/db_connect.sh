DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pass=$(cat $DIR/database.json | grep password | cut -d '"' -f4)
mysql crfs -u crfs_user --password=$pass
