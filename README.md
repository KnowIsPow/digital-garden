# NEXT.JS + TAILWINDCSS STARTER KIT

An opinionated boilerplate for working with Next.js and TailwindCSS. The purpose of this work is to provide a framework and set of components that make it convienent to start new Next.js + TailwindCSS projects.

## Getting Started

Run the following command to create a new project with this Starter:

```
yarn create next-app [project-name] -e https://github.com/KnowIsPow/next-starter-tailwind
# or
npx create-next-app [project-name] -e https://github.com/KnowIsPow/next-starter-tailwind
```

## FOLDER STRUCTURE

All files are moved into the ./src folder. Additional folders included:

### UI

A place for generic design components. UI components are generally useable in a variety of context and in many cases across multiple different applications. An example of a UI component is a generic calendar that can be used for many purposes.

### FEATURES

A place for application-specific functionality. Features tend to be comprised of UI building blocks and include some form of state. An example of a feature would be an hotel availability calendar that adds room availability state to a calendar UI component.

### FUNCTIONS

A place for functions that can be used in multiple contexts. The included example is a function that formats numbers by adding commas to them.

## NAMING CONVENTION

All files are named in lowercase-kebab-case.

## TAILWINDCSS COMPONENTS

Styled components provided in styles.css serve to provide a set of basic components that promote building a cohesive brand.

## REACT COMPONENTS

React components are added as a need is recognized to reduce development around commonly recurring component patterns.
