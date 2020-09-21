echo "hexchat: Executing build..."

print_files() {
  files=$(ls -l)
  currdir=$(pwd)
  echo "files in this directory $currdir \n $files"
}

BASEDIR=$(pwd)
RELEASE_DIR="$BASEDIR/release"
echo "base dir: $BASEDIR, release dir: $RELEASE_DIR"


# clean-up old files
print_files
echo "Cleaning up old files"
rm -rf $RELEASE_DIR

# LOGIC for getting angular built on server.
# build in angular folder
# echo "Building angular firebase"
# cd code/angular_firebase
# npm install
# npm run build
# lsfiles=$(ls dist/)
# echo "ls: $lsfiles"

# copy built angular files
# echo "Copying built angular files"
# cp -r dist/ $BASEDIR/
# cp server.js $BASEDIR/
# cp code/servers/package.json $BASEDIR/


# get new files from distribution
mkdir -p $RELEASE_DIR
cd $RELEASE_DIR
echo "Copying new files"
cp ../code/servers/server.js ./
cp -r ../code/servers/dist ./
cp ../code/servers/package.json ./

# install new dependencies
echo "Running npm install in $RELEASE_DIR"
print_files
npm install

echo "starting server"
node server.js
