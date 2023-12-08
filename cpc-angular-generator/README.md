# Descriptive Angular NX Generator

This library was generated with [Nx](https://nx.dev).

## Usage

Run `nx g descriptive-angular-nx-generator --file-path=PROJECT_STRUCTURE.md` to generate the Angular structure

PROJECT_STRUCTURE.md:
```angular2html
/app
  /article
    /components
    /store
    /types
    /services
      article.service.ts
    article.routes.ts
  /globalFeed
    /components
      /globalFeed
    globalFeed.routes.ts
  /shared
    /components
      /backendErrorMessages
        backendErrorMessages.component.ts
      /popularTags
        popularTags.component.ts
        /types
        /store
        /services
    /directives
      /incredibleDirective
        incredibleDirective.directive.ts
    /guards
      everythingSealed.guard.ts
    /pipes
      mario.pipe.ts  
    /types
      article.interface.ts
      articleType.enum.ts
      articleTwo.ts
      articleThree.class.ts
    /services
      article.service.ts
  app.routes.ts
main.ts

```

Supported types: component, service, routes, directive, guard, pipe, interface, enum, class. If no type given in the filename, then interface is considered default.

## Future work
- In the future versions I want to add also extensions for NgRx library

> [!WARNING]
> The generator is not tested on Unix based OS