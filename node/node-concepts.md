# NodeJS

## What is NodeJS

- A javascript (JS) runtime
- It's JS that runs in the server
- NodeJS is build in JS
- NodeJS allows to run JS code on the server
- NodeJS uses v8 which is a name of an engine that allows to run JS code on the browser. That engine takes your JS code and compiles it to machine code.
- v8 is written in c++
- NodeJS adds to v8 engine features to read files, etc.
- Process can be ended by code
- Single threaded.

## Javascript on the server

The client sends a request to the server, the server execute some code and sends backs a response to the client.

The code could be database access, input validation, authentication, bussines logic, etc.

But NodeJS is not limited to be a server, it can be used for utility scripts that's never expose to the client.

## Role in web development

- Run server
- Bussines logic
- Send request

## The REPL

REPL is one way to use node in the console.

Read - user input  
Eval - user input  
Print - output the result  
Loop - waits for new events

- To start it type node in a terminal
- REPL is a great playground

## NodeJS Program Lifecycle

![NodeJS Program Lifecycle](/resources/program_lifecycle.png "NodeJS Program Lifecycle").
