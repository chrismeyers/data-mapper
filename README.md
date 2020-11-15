# data-shifter
This package provides a data validation and transformation pipeline. Due to the functional nature of this package, it's easy to swap the components of the pipeline to dynamically generate different transformations.

## Usage
The `convert` module leverages currying to build this pipeline:
```js
const transformed = convert(validator)(mapper)(data);
```
Where the arguments are:
- `validator`: A schema validation object, [yup](https://github.com/jquense/yup) is used by the provided validators
- `mapper`: Runs validation and performs data transformation
- `data`: An object to be validated and transformed

This package comes with a few predefined validators and mappers which can be obtained using the `resolvers` module ([example](examples/simple.js)), but the real power of this library comes from the fact that the pipeline just acts as a framework that custom validators and mappers can be plugged into ([example](examples/custom.js)).
