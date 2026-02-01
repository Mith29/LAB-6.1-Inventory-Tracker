How does TypeScript enforce type safety in this object-oriented program?
TypeScript enforces type safety by requiring explicit types for classes, properties, method parameters, and return values, and by checking these at compile time. This prevents invalid assignments, incorrect method calls, and misuse of objects before the code runs.


How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
Inheritance reduced code duplication by moving shared properties and methods into a common base class, allowing PhysicalProduct and DigitalProduct to reuse the same logic instead of redefining it in each class.


What are the benefits of using encapsulation and access modifiers (public, private, protected) in 
this context?
Encapsulation and access modifiers help protect internal data, control how properties and methods are accessed, and prevent unintended changes. They make the code more secure and maintainable.


If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
Polymorphism would allow SubscriptionProduct to extend the base product class and override shared methods while being used through the same base type. This lets the new product work seamlessly with existing code without modifying it, making the extension easy and scalable.

