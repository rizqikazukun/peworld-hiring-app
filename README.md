# Peworld Hiring Web

![logo](docs/pictures/logo.png)

**Peworld Hiring web. learning base project from pijarcamp. Using NextJS Framework as the base of the project.**

For more Peworld is a hiring app that connects recruiters and job seekers in the industry 4.0. Peworld offers certified talent with specific skills and industry standards, as well as skill competitions to hire the best talent. Peworld supports 10+ languages, including Java, Kotlin, PHP, JavaScript, Golang, C++, and Ruby. Peworld is the best platform for anyone who wants to pursue a career in the tech industry, and for anyone who wants to find the best talent of the nation for the change of the 4.0 revolution.

Existing Feature  

 - Recruiter Register  
 - Recruiter Login
 - Search Talent
 - Hiring Talent

Developer : Rizqi Pratama  
Tech Stack : Javascript, React, NextJS, Tailwind, SASS  
Preview : <https://peworld-hiring-app.vercel.app>

> Note: Because of limitation from backend cloud provider, the page data is slow to load.  
> Sorry for the inconvenience.

## Table of content

- [Peworld Hiring Web](#peworld-hiring-web)
	- [Table of content](#table-of-content)
	- [Screenshoot](#screenshoot)
	- [How to run](#how-to-run)
	- [Environment](#environment)
	- [Commit Message Status](#commit-message-status)
	- [Releated Project](#releated-project)

## Screenshoot

![overview](./docs/pictures/peworld-overview.png)

## How to run

```bash
# Setup the db using postgres
# Configure the dot env

# run development build
npm run dev

# run production build
npm run build
npm run start
```

## Environment

For development environment you can put the environment into ``.env.local``, an example is available on root project named ``.env.example``

```shell
# Setup for local or production env.
# BE_URL is pointing to the backend service
# example : http://localhost:3001
# BASE_URL is pointing to local next api
# example : http://localhost:3001

BE_URL=
BASE_URL=
```

## Commit Message Status

 Symbol | Description
:--:|:-----------------:
 ✅ | Done doing something
 🔷 | Changing something
 ❌ | Removing something
 🚩 | Fixing Something

## Releated Project

[Peworld Demo](https://peworld-hiring-app.vercel.app)
