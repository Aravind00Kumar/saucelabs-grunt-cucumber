intelliSense

//1. npm i -g tsd

1. npm install -g typings

2. typings install dt~angular-protractor --global
3. typings install dt~selenium-webdriver --global
    The dt~ prefix tells the Typings tool to search the DefinitelyTyped repository for the specified type definition file
    
3. add jsconfig.json in the root
{
    "compilerOptions": {
        "target": "ES6"
    }
}

