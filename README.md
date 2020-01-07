This is a repro that shows how `fast-shallow-equal` has es2015 code that ends up in production builds even after transpiled.

The screenshot below shows that production bundle still has es2015 code:
![Code with es2015 code](https://user-images.githubusercontent.com/7467450/71923734-735e2480-316c-11ea-9ae6-7c3d41814eaa.png)

Depending on the version of UglifyJS that you use, instead the build will fail with an error similar to the following (because UglifyJS is not expecting es2015 code):
```
Unexpected token name «i», expected punc «;»
```
