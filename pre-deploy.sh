# /bin/bash
touch ./out/.nojekyll
echo $CNAME > ./out/CNAME
cp apple-app-site-association ./out/
cp -r product ./out/
