# Nightwatch-example-setup
Initial night watch test configuration.
# Usage (assumes FreeBSD/OSX sed)

Replace example-prod with your production site url
```
sed -i '' 's/example-prod/your-prod-site/g' globals.json
```
Replace example-dev with your dev site url
```
sed -i '' 's/example-dev/your-dev-site/g' globals.json
```
Replace example-tag with the tag for your initial test
```
sed -i '' 's/example-tag/your-tag-here/g' example.js
```
Replace example-test with your first test
```
sed -i '' 's/example-test/your-test-here/g' example.js
```

You'll probably want to rename example.js to something more meaningful.
