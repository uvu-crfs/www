#Default user if one is not in environment
# Set a user by "export CRFS_USER=<your remote username>"
CRFS_USER="${CRFS_USER:-mvndaai}"
echo $CRFS_USER

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

rsync -a $CRFS_USER@stu-web4.uvu.edu:/etc/httpd $BASEDIR
#rsync -a $CRFS_USER@stu-web4.uvu.edu:/etc/shibboleth.d $BASEDIR
rsync -a $CRFS_USER@stu-web4.uvu.edu:/etc/shibboleth $BASEDIR
