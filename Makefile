install:
		npm ci
publish:
		npm publish --dry-run
genDiff:
		node bin/gendiff.js
lint:
		npx eslint
test:
	npm test --test-reporter=spec
test-coverage:
		npm test

