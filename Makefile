install:
		npm ci
publish:
		npm publish --dry-run
genDiff:
		node bin/gendiff.js
lint:
		npx eslint
test-coverage:
		npm test
