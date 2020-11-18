# data-shifter
This package provides a data validation and transformation pipeline. Due to the functional nature of this package, it's easy to swap the components of the pipeline to dynamically generate different transformations.

## Usage
The `convert` module leverages currying to build this pipeline:
```js
const transformed = await convert(validator, fn=validate)(shifter)(data);
```
Where the arguments are:
+ `validator`: A schema validator ([yup](https://github.com/jquense/yup) is used by the provided validators)
  - `fn` (optional): the name of the `validator` function to be called
  - Any promise-based validator with a `fn` that resolves with the validated data and rejects with an error can be used
- `shifter`: A function that performs the transformation and returns the transformed data
- `data`: An object to be validated and transformed

This package comes with a few predefined validators and shifters which can be obtained using the `resolvers` module ([example](examples/simple.js)), but the real power of this library comes from the fact that the pipeline just acts as a framework that custom validators and shifters can be plugged into ([example](examples/custom.js)).
