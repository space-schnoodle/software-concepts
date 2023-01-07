# Object Oriented Programming

The four principles of object-onriented programming are:

- encapsulation
- abstraction
- inheritance
- polymorphism

### Encapsulaption

Encapsulaption is achived when each object keeps its state **private** inside a class. Other objects don't have direct access to this state. Instead they can called a list of public functions (methods).
The object manages its status via these methods and no other class can unless is explicity allowed.

### Abstraction

Applying abstraction means that each object should only expose a high-level mechanism for using it. The mechanism should hide internal implementation details. We should be able to call methods of the class without knowing how it works. For instance, with an airfryer you put an hambunger and set time and temperature and hit a start kind of button and you don't know how it works exactly but at the end you have cook a meal.

### Inheritance

Sometimes objects are similar but not 100% similar.
Reuse common logic creating a class, and then used it to create other similar classes, this is inheritance.
A child class reuses properties of the parent class but also can implement its own.

### Polymorphism

- Means many shapes.
- Say we have a parent class and a few child classes which inherit from it. Then you have a collection with a mix of all theses classes, or we have a method implemented for the parent classes but we'd like to use it for its children.
  This can be solve using polymorphism.
  Polymorphism gives a way to use a class exacly like its parent so there's no confunsion with missing types, but each child class keeps its own methods as they are.
- Typically happens by defining a parent interface to be reused., the interfaces declares methods and each child class implememts their version of them.
  Having this you can have a list of mixed elements and the language take care of the implementation method it should use.

## Some important points

- OPP treats data as a critical element.
- Emphasis is on data rather that procedure.
- Data is protected from external functions.
