##notes

git clone https://github.com/z-afshar/esma.git
git remote add upstream https://github.com/z-afshar/esma.git
git remote -v

git fetch upstream
git branch -va

git checkout master
git merge upstream/master

git branch newfeature
git checkout newfeature

#doing work on new branch

git add .
git commit -m 'adding new features'
git status
git rebase master

git checkout
git rebase -i master

#submit work
git push -u origin newfeature
# type username & password of github

#on upstream repo make pull request from your new branch to upstream master branch

