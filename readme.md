Quick start

## Test repo

### Installation

```
node -v - you should have 6+ version to run codeceptionjs
npm i -g codeceptjs nightmare nightmare-upload
npm install 

```

### Configuration file

codecept.json - actually, don't touch :) or, if you wanna to see tests step by step in the electron browser - change "show": false to true.

### Tests directories

```
tests/global/**/ - main acceptance/functional tests, global approachment
tests/apps/** - test strickly for custom app (not global)
tests/jira/** - jira issue related tests (regression etc.) (or other bug tracker)
```

### Commands

```
codeceptjs run --profile http://url.pl --steps   - will run all tests from "tests" path
codeceptjs run --grep "appName" --profile http://url.com/en --steps  - will run all tests with "appName" as a part of file name

parameters

-- profile - url parameter
-- grep - searching/narrowing tests base on test name
-- steps - show test process step by step in the console

```

### Output

By default all screnshots are saved to output dir (not in the repo!). 
File naming pattern:
url_pl/date/test_name_resolution

By default tests run with 6 diffrent screen res.

```
// +16px for scrollbar [1980, 1280, 1024, 750, 380, 320]
sizes = [1996, 1296, 1040, 766, 396, 336];
```
To fix "resize browser" bug, change body inside resizeWindow function 

file

```
globaly installed node_modules/codeceptjs/lib/helper/Nightmare.js
```

from

```
resizeWindow(width, height) {
	if (width === 'maximize') {
	  return this.browser.manage().window().maximize();
	}
	return this.browser.manage().window().setSize(width, height);
}
```

to 

```
resizeWindow(width, height) {
	this.browser.viewport(width, height);
}
```


### Example


```
codeceptjs run --profile http://amazon.com --steps
```