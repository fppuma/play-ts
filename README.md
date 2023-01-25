# play-ts
Playground with TypeScript

## Clone this repo
```
git clone [repo_name]
```

## Init the node project
```
npm init -y
```

## Add ts-node
```
npm install ts-node --save-dev
```

## Create an example (index.ts)
In this example, there is a class Customer with a constructor.

## Config package.json
Add in the **script** section
```js
"start": "ts-node index.ts"
```
## Run the example
```
npm run start
```
### Output
```
> play-ts@1.0.0 start
> ts-node index.ts

{"name":"John Smith"}
```

## Add tsconfig.json
```
npx tsc --init
```

## Reconfigure package.json
build  
serve  
start  
