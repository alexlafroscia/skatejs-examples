# generator-skatejs

## What is it?

[`generator-skatejs`][generator-skatejs] is a tool that I built to help scaffold out a new Skate project.  It can be used to generate new components and tests, style them, and provide demo sites.

For more information on how to use it, check out the link above.

## When would I do this?

If you're in a position where you're authoring a new component and need a way to do it, `generator-skatejs` can be a good tool to get you started.  It will set up build tools like Webpack and Sass, handle bundling dependencies, and provide a "production" version of your components for when you're ready to add them to your site.

## How do I use this?

### Installation

```bash
npm install -g yo generator-skatejs
```

### Creating a new project

```bash
mkdir my-new-component
cd my-new-component
yo skatejs my-cool-component
```

From here, `generator-skatejs` will ask you a bunch of questions, and ultimately create a project with the directory structure that you see here!

[generator-skatejs]: https://github.com/alexlafroscia/generator-skatejs

