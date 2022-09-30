# Print Manager - TypeScript Refactor

Commercial print shop management application

## Concept

As former print professional, I was always frustrated with the available software for managing projects and customers. I initially
built this app as two separate entities, an Express and GraphQL API serving a React UI. I plan to expand on and improve that project
through the addition of TypeScript, Apollo GraphQL, unit testing, and Lerna, turning the project into a monorepo.

## Tech Stack

API: Node, Express, Apollo Server, GraphQL
UI: React, Apollo Client

## User Stories

As a User, who is assumed to be an employee of a commercial printing operation (operator, sales, design):

### MVP: Client + Contact Management

I need to: track client organizations and contacts

In order to: connect them to tickets and projects for better communication, marketing data, shipping concerns

### MVP: Projects

I need to: logically group closely related tickets

In order to: better monitor large scale projects consisting of multiple tickets,

### MVP: Custom Tickets

I need to: build tickets with custom fields and data

In order to: better tailor the app experience to my business needs

### MVP: Custom Workflow

I need to: customize the stages my projects and tickets will move through

In order to: better track job stage, identify process bottlenecks, increase productivity

### Stretch: Cost Tracking

I would like to: cost estimate tickets and projects as they're created

### Stretch: Drag and Drop Stage Management

I would like to: drag and drop ticket cards between different stages

### Stretch: Project Calendar

I would like to: see a calendar view of tickets and projects
