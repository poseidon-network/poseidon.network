# /bin/bash
touch ./out/.nojekyll
echo "www.poseidon.network" > ./out/CNAME
cp apple-app-site-association ./out/
cp -r product/whitepaper ./out/
