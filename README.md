# 📱 Social Blog - Social App

Social Blog is an app built with Vite (Webpack), React, TypeScript, Storybook, and other technologies. This app is purposefully made for the web, like a web blog app.

## 🚀 Features

- 🗝 Sign in (authentication)
- 👤 View your own profile, email, name, country, etc.
- 🗨 Create articles, rate, comment
- 📬 Users can send:
    - 📝 Text (for comments)
- 🔔 Get notified of unseen messages
- 🌓 Toggle between light mode and dark mode

## 🛠️ Main Technologies
- `React`
- `TypeScript`
- `Vite`
- `StoryBook`
- `Cypress (for e2e testing)`
- `Loki (for ui testing)`
- `I18next (for translations)`

## Launch of the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Starting a frontend project on the webpack dev server
- `npm run start:vite` - Starting a frontend project on vite
- `npm run start:dev` - Starting a frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Starting a frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter
- `npm run test:unit` - Hack unit tests with jest
- `npm run test:ui` - Hack screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generating a json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - launch Storybook
- `npm run storybook:build` - Build a storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-ulbi-tv-plugin*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers from the point of view of FSD
   (for example widgets cannot be used in features and entitites)
3) public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Running linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ButtonSize, ButtonThemes } from './model/consts';

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export default meta;

export const Template: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.CLEAR
  }
};
```

----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.

In precommit hooks we check the project with linters, config in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [Article](/src/features/Article)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ScrollSave](/src/features/ScrollSave)
- [ThemeSwitcher](/src/features/ThemeSwitcher)

[//]: # (## 📝 Process)

[//]: # ()
[//]: # (I started by jotting down in my notebook what features I wanted. I often use WhatsApp Web, so I tried to draw inspiration from that.)

[//]: # ()
[//]: # (I obviously started by setting up Firebase, then continued with authentication. Next, I set up routing, the home page, and the private route for it, then focused on the sidebar, since there's a lot happening there, and finally the chat page and its components.)

[//]: # ()
[//]: # (Then it was the smaller details, like creating a drag and drop for images and files, adding an emoji picker, changing the group name, etc. I didn't have a design idea at first; I just built everything and came up with something later. By design, I mean the colors and the styling.)

[//]: # ()
[//]: # (The most challenging part was figuring out how the data structure should be. One new thing I learned was indexing in Firebase. That was new to me and something I can take with me into the future.)

[//]: # ()
[//]: # (## 🤔 How Can It Be Improved?)

[//]: # ()
[//]: # (It would be amazing if users were able to send GIFs and stickers, just like on WhatsApp. Also, being able to send voice messages and videos to each other would greatly improve the project. Adding testing would be beneficial as well, something I definitely plan to do next time.)

[//]: # (## 🐛 Current Bug)

[//]: # ()
[//]: # (So far, I'm not really sure if there are any bugs. However, there might be some issues on the mobile version. I tested it out on my phone &#40;iPhone 14 Pro Max&#41;, and so far it looks good there, but on smaller devices or Android phones, it might look a bit odd. I'm not sure from that side, but there might be some bugs to iron out.)


[//]: # (<details>)

[//]: # (<summary><h3> 🎥 - Demo Video </h3></summary>)

[//]: # (<video src="https://github.com/mirayatech/Chatify/assets/71933266/c1695a42-8d74-4a00-b89c-e3b6adc4119d" controls="controls" style="max-width: 730px;">)

[//]: # (</video>)

[//]: # ()
[//]: # (<video src="https://github.com/mirayatech/Chatify/assets/71933266/f11d1d9b-2517-4a5c-81df-1711f4182da0" controls="controls">)

[//]: # (</video>)

[//]: # (</details>)

<details>
<summary><h3> 📸 - Demo Images </h3></summary>

#

![Screenshot 2023-12-28 at 11 45 11](https://ibb.co/HHZ5yHZ)

#

![Screenshot 2023-12-28 at 11 45 53](https://ibb.co/khgH760)

#

![Screenshot 2023-12-28 at 11 48 12](https://ibb.co/K6SNqnz)


#

![Screenshot 2023-12-28 at 11 48 35](https://ibb.co/DVBbztv)

#

![Screenshot 2023-12-28 at 11 52 06](https://ibb.co/61Mfx23)

#

![Screenshot 2023-12-28 at 11 52 15](https://ibb.co/5RmcFkh)


</details>
