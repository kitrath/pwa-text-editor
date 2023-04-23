# PWA Text Editor

## User Story
**AS A** developer<br>
**I WANT** to create notes or code snippets with or without an internet connection<br>
**SO THAT** I can reliably retrieve them for later use

## Acceptance Criteria
**GIVEN** a text editor web application
- **WHEN** I open my application in my editor<br>
**THEN** I should see a client server folder structure
- **WHEN** I run `npm run start` from the root directory<br>
**THEN** I find that my application should start up the backend and serve the client
- **WHEN** I run the text editor application from my terminal<br>
**THEN** I find that my JavaScript files have been bundled using webpack
- **WHEN** I run my webpack plugins<br>
**THEN** I find that I have generated HTML file, service worker, and a manifest rule
- **WHEN** I use next-gen JavaScript in my application<br>
**THEN** I find that the text editor still functions in the browser without errors
- **WHEN** I opn the text editor<br>
**THEN** I find that IndexedDB has immediately created a database storage
- **WHEN** I enter content and subsequently click off of the DOM window<br>
**THEN** I find that the content in the text editor has been saved with IndexedDB
- **WHEN** I reopen the text editor after closing it<br>
**THEN** I find that the content in the text editor has been retrieved from out IndexedDB
- **WHEN** I click on the install button<br>
**THEN** I download my web application as an icon on my desktop
- **WHEN** I load my web application<br>
**THEN** I should have a registered service worker using workbox
- **WHEN** I register a service worker<br>
**THEN** I should have my static assets pre cached upon loading along with subsequent pages and static assets
- **WHEN** I deploy to Heroku<br>
**THEN** I should have proper build scripts for a webpack application