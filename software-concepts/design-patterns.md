# Design Patterns

Design patters are solutions to recurring problemns in software application development.

## Types of design patterns

### Creational pattern

Is concerned with the way we create objects in an object oriented style. It applies patterns in the way we instantiate a class.

### Structural pattern

Is concerned with how our classes and objects are compared to form a larger structure in our application.

### Behavorial pattern

Is concerned about how objects can interact efficiently without being tightly coupled.

### Singleton pattern

One president per country.  
One instance of a class in the app, example, and instance of your database connection.

### Abstract factory

The factory pattern simply generates an object instance for a user without exposing any instatiation logic to the client.

### Builder pattern

Allows you to create differnt flavors of an object without using a contructor class.

### Adapter pattern

Its a process of wrapping the incompatible object in an adapter to make it compatible without another class.

### Observer pattern

An observer patters is a way to update the dependets when there is a state change in another object.

### Strategy pattern

Allows you to select and algorithsm or strategy at runtime. The real use case for this scenario would be switching file storage strategy based on the file size.

### Facade pattern

The facade pattern allow us to wrap similar functions on modules inside a single interface. That way the client doesn't need to know anything about how it works internally.

## Chain of responsability patter

The chain of responsabiblity allows and object to go though a chain of conditions or functionalities. Instead of managing all the functionalities and conditions in one place, it splits into chains of conditions that an object must pass though.
Example: express middleware
