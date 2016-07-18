# saucelabs-grunt-cucumber
Sample project to run cucumberjs acceptance tests in saucelabs using protractor and grunt task runner
## Prerequisites 
- Visual Studio Code >1.3
- Node.js >6
- Chrome Browser >50
- Saucelabs User Name and Access Key (https://saucelabs.com)

>_Note: I used windows environment_

## How to install
- Add saucelabs username and access key in the environment variables
  - `SAUCE_USERNAME` User Name
  - `SAUCE_ACCESS_KEY` Access Key
- Update the hostname 
  - Open `C:\Windows\System32\drivers\etc\hosts`
  - Update `127.0.0.1  localhost` (is required to access localhost from saucelabs) 
```

npm install
npm install grunt-cli express -g

```

## How to run
There are four tasks configured in grunt task runner with two categories 

- local : execute protractor tests in local chrome browser
  - `grunt`  run tests in chrome
  - `grunt debug` run tests in debug mode
- saucelabs : executes protractor tests in saucelabs (start tunnel before execution)
  - `grunt sauce` run tests in saucelabs 
  - `grunt sauce-debug` run tests in debug mode 

> debugging 
> - Open `saucelabs-grunt-cucumber` from Visual Studio Code
> - Put break point in the IDE
> - Navigate to the `..\saucelabs-grunt-cucumber>` from command prompt
> - Execute debug task (ex: `grunt debug`)
> - Start debugging `F5` from Visual Studio Code

### Start saucelabs tunnel
- Navigate to the `saucelabs-grunt-cucumber\bin\sc-4.3.16-win32\bin>` from command prompt
- execute command `sc.exe -u <UserName> -k <AccessKey> --tunnel-identifier myTunnel --no-remove-colliding-tunnels --wait-tunnel-shutdown`
  - Replace `<UserName>` with saucelabs username and `<AccessKey>` with saucelabs access key
