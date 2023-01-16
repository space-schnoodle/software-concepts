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
- NodeJS runs non-blocking JS code and uses an event-driven code ("event lopp") for running your logic.
- A node program exits as soon as there is no more work to do.
- NodeJS uses event driven architecture.

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

## Why NodeJS is single threaded?

- NodeJS uses a single threaded model in order to support async processing.
- With async processing, an application ca perform better and is more stable under web loads.
  NodeJS makes use of a single threaded model approach rather that a typical thread based implementation.
- It works on a single threaded event loop and a non-blocking I/O which provides high rate as it can handle a higher number of cuncurrent requests.
- By making use of the http module, nodeJS can run on any stand-alone web server.

### Event loop

Is a loop process that is managed by nodeJS that keeps on running as long as there is work to do. NodeJS uses this pattern because it actually executes single threaded javascript. The entire node process uses one thread. Ecevutes code when a certain event occurs.  
Is super fast handling this requests.  
Never block the event loop for too long.  
Event loop handles all the callbacks in order.

### ExpressJS

- Server logic is complex
- Is a set of helper functions for the heavy lifting.
- It's very extensible.
- It's all about middleware.
