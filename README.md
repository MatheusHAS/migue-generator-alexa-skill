# migue-generator-alexa-skill

- Need [AWS Account](https://aws.amazon.com/pt/free) - To host your lambda function
- [aws-cli](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/cli-chap-install.html) is required

## Install

```bash
$ npm i
# or
$ yarn
```

## Step 1 - How to configurate to deploy

- 1º: auth in alexa developer console using => `sls alexa auth`

  PS: In the first time, create your security profile. After created, you can take your `ALEXA_CLIENT_ID` and `ALEXA_CLIENT_SECRET`.

- 2º: create your skill in the alexa developer console using => `sls alexa create --name SKILL_NAME --locale pt-BR --type custom`

  You obtain your `ALEXA_SKILL_ID`.

  After create, this skill is available in [this page](https://developer.amazon.com/alexa/console/ask)

- 3º: deploy your application using => `sls deploy --stage prd` or `sls deploy --stage tst`

  This stage need to create your `AWS_ENDPOINT_ARN`, you can take your `ARN` in [aws developer console - lambda page](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions).

  PS: If you dont see your function, check your `region` at the top right corner.

- 4º: Get your `ALEXA_VENDOR_ID` in [this page](https://developer.amazon.com/settings/console/mycid)

## Step 2 - set your ENVIRONMENT VARS

Run using this example:

```bash
export ALEXA_VENDOR_ID="YOUR_ALEXA_VENDOR_ID_HERE"
export ALEXA_CLIENT_ID="YOUR_CLIENT_ID_HERE"
export ALEXA_CLIENT_SECRET="YOUR_CLIENT_SECRET_HERE"
export ALEXA_SKILL_ID="YOUR_SKILL_ID_HERE"
export AWS_ENDPOINT_ARN="YOUR_AWS_ENDPOINT_ARN_HERE" # Example arn:aws:lambda:AWS_REGION:ACCOUNT_ID:function:YOUR_PREFIX-STAGE-FUNCTION_NAME
export AWS_REGION_NAME="YOUR_AWS_REGION_NAME_HERE" # Your region used in AWS account. Example: us-east-1
```

## Step 3 - deploy and build alexa skill

- 1º: deploy your lambda again (if need use --force) using => `sls deploy --stage tst`

- 2º: deploy your amazon skill using => `sls alexa build`

- 3º: Access [amazon alexa developer console](https://developer.amazon.com/alexa/console/ask) and select option `test` in you skill. And change `Skill testing is enabled in` to `development` and test in your `alexa` or in your `browser` using this page.

### TODO:

[ ] Use `github actions` to deploy using `serverless framework` on merge PR
[ ] Add [commit linter](https://github.com/conventional-changelog/commitlint#getting-started)
