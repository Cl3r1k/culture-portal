
# The Rolling Scopes School — CodeJam-Culture-Portal 2019

## Worklog and self evaluation:

### Worklog:

_[Deadline](https://github.com/deadline2020)_

| time spent | feature                                       |
| ---------- | --------------------------------------------- |
|   3 hours  | implement list of authors component           |
|   3 hours  | implement search component                    |
|   2 hours  | implement photo-gallery component             |
|   3 hours  | add information about poets                   |
|  2.5 hours | add information about poets in Belarusian     |
|  2.5 hours | change map component                          |


_[MariaV](https://github.com/)_

| time spent | feature                                       |
| ---------- | --------------------------------------------- |
| add hours  | describe task                                 |


_[Musmen](https://github.com/musmen)_

| time spent | feature                                       |
| ---------- | --------------------------------------------- |
|   2 hours  | create poets test data file                   |
|   3 hours  | implement author-page generation              |
|   1 hour   | implement list of artist's works              |
|  0.5 hour  | implement vertical time-line for biography    |
|   1 hour   | author-page component refactoring             |
|   2 hours  | implement modal youtube-video window          |
|  1.5 hours | add portal description and author of the day  |
|   3 hours  | add information about poets in English        |
|   3 hours  | add workflow-page with team workflow diagram  |
|   4 hours  | add technology-page with technology diagram   |


_[niki_night](https://github.com/ViktoriyaVorozhun)_

| time spent | feature                                       |
| ---------- | --------------------------------------------- |
| add hours  | describe task                                 |


_[Cl3r1k](https://github.com/cl3r1k)_

| time spent | feature                                       |
| ---------- | --------------------------------------------- |
| 6h         | Learning main stack (react+gatsby+contentful) |
| 2h         | put content in 'contentful'                   |
| 4h         | implement 'team-page'                         |
| 4h         | implement 'worklog-page'                      |
| 15h        | implement translation                         |
| 2h         | refactor                                      |

### The main difficulties occurred during teamwork:
1. Organization of teamwork: to structure tasks, allocate responsibilities and deadlines, eliminate duplication, minimize conflicts by code. With a competent approach and the use of modern tools / techniques - it is solved quickly and effectively
2. Application of CMS Contentful, GraphQL, I18next framework. The study of issues of connection, organization of interaction, including on GatsbyJS
3. A factor to consider is the difference in the time zones of developers. Our team is 7 hours. A little complexity, but you need to consider


### Self evaluation:

1. #### Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codejam-culture-portal.md
2. #### 28.02.2020 / 29.02.2020

### Total

#### Task ( 20 / 20 )

---

##### Navigation ( 1 / 1 )

##### Main page with: ( 3 / 3 )

- [x] portal's description
- [x] 'author of the day' block
- [x] developer team description

##### Page of an author with: ( 11 / 11 )

- [x] Page with a list of authors on the given topic with search widget
- [x] search should be on the current language with ability to search by name, city/place of birth
- [x] 5-7 authors are enough to complete the task successfully.
- [x] Author's name
- [x] Years of life
- [x] his/her picture
- [x] biography in the form of timeline (example here)
- [x] list of artist's works with the date of creation
- [x] photo gallery with author's picture and pictures of his/her works
- [x] youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
- [x] place of author's major activity on a map: google / openstreetmap (leaflet) / yandex

##### General: ( 5 / 5 )

- [x] Web portal must be deployed on Github Pages / netlify / google firebase / etc
- [x] Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated.
- [x] Portal should be relatively correctly displayed on tablets and mobile phones.
- [x] You should develop portal using libraries of visual components such as material-ui or bootstrap.
- [x] You should use Reactjs or use gatsbyjs to get additional points.

#### Evaluation: ( 50 + 140 + 90 = 280 )

##### Min scope - **50**
- [x] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [x] **10** Page with team members + page with worklog
- [x] **10** Page with list of authors contains search widget;
- [x] **20** Portal has two languages;


##### Normal scope - **140**
- [x] **20** Portal has page with styleguide;
- [x] **10** Mobile version is okey
- [x] **10** Ipad/tablet version is okey
- [x] **10** Author's page contains timeline;
- [x] **10** Author's page contains video overlay;
- [x] **20** Author's page contains photo gallery;
- [x] **10** Author's page contains map (geowidget);
- [x] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [x] **20** Material-ui / bootstrap is used
- [x] **10** Portal has third language;

##### Extra scope - **90**
- [x] **10** Confidence of the project presentation;
- [x] **10** Project is made using gatsbyjs;
- [x] **10** Contentful / netlify cms is used for content management
- [x] **20** Animations / special effects like paralax 
- [x] **up to 20** Outstanding design;
- [x] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles

##### Fines: ( 0 )

- [ ] -100 if there are less than 5 commits from each active team member. Everyone should merge their own PRs.
- [ ] up to -50 points for violations stage2-tasks-requirements
- [ ] -40 if there is no worklog for team
- [ ] -20 too primitive (ugly for 2019) design / UX
