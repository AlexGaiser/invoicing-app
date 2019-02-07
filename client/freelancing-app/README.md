# Freelancer Invoice App
## Project Description
Imagine being able to dynamically track your task/job time from a starting timestamp to an end timestamp with notes commited to each timestamp. Now with your task or job completed, the backend will render an invoice containing properties and notes inputted by the user.
Simply put, this app allows users to track their freelancing work invoices in a quick, easy and comprehensive way.
##### Developed & Designed by Jason, Alex, and Kwadwo

##### App Prototype Link - [Freelance Invoice App](http://www.google.com)
##### App Link - [Freelance Invoice App](http://www.google.com)

## Projected Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description / Proposal | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.)  / LowFi Prototype | In Progress
|Day 4| Pseudocode / Database / React / CSS | In Progress
|Day 5| Initial Clickable Model  | Pending
|Day 6| MVP | Pending
|Day 7| Present | Pending




## Wireframes / Diagrams

**LowFi App Wireframe 1 w/ App Component List**
[View Image](https://res.cloudinary.com/jasonethedesigner/image/upload/v1549294446/invoice-app/wireframe-1.jpg)

**LowFi App Invoice Wireframe 1**
[View Image](https://wireframe.cc/uK22kE)

**Dependencies**
[View Image](https://res.cloudinary.com/jasonethedesigner/image/upload/v1549294446/invoice-app/dependencies.jpg)

**Backend Relations**
[View Image](https://res.cloudinary.com/ddz7dotz5/image/upload/v1549377879/Screen_Shot_2019-02-05_at_9.43.45_AM.png)

**File Architecture**
[View Image](https://res.cloudinary.com/jasonethedesigner/image/upload/v1549294446/invoice-app/directory-1.jpg)

**Matrix Diagram Image**
[View Image](https://res.cloudinary.com/jasonethedesigner/image/upload/v1549294446/invoice-app/priority-matrix-1.jpg)



## Priority Matrix
#### High Priority/Urgent Features

- Create React App
- Create DB
- Setup Server

#### High Priority/Not Urgent Features

- CRUD for rates
- Implement Timer Functions
- Style Layout
- Track User Login

#### Low Priority/Urgent Features

- Branding

#### Low Priority/Not Urgent Features

- Implement info / API
- Implement Commenting

## MVP/PostMVP

#### MVP

- Database
- Front End React
- DB Tables / Models
- Clock / Timer
- Rates Dropdown
- Final Quote / Invoice

#### PostMVP
- Branding
- Reddit Integration
- Commenting / Bot Integration
- Reminders / Alarms
- Live Public Server

## React Architectural Design

#### [React Component Heirharchy](https://www.lucidchart.com/invitations/accept/526f5e66-8e57-4c9e-a0a4-eeef3ce2529c)

## Functional Components

| Component | Description |
| --- | :---: |  
| Stopwatch | Renders the time and allows user to create timestamps of the current task and timebox. |
| Invoice Form | User can create, edit invoice in sync with stopwatch. Populates end state of invoice proposal |
| Rate Form | User can create or select rates per job/task and append that data to invoice table.
| Main Invoice | All data submitted creates a proposal invoice. User can edit/delete.
| Comment Form | User/Client can leave comments with each invoice or task. |
| User Login | User Can Register and Create Login to access web app.
| Dynamic Modal | Modal populates with Invoice Preview before confirming
| Invoice PDF | PDF is generated and can be downloaded
| User Profile | User Can Now create a profile

## Component Timeline
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Stopwatch | H | 5hrs | 4hrs |
| Invoice Form | H | 4hrs | 10hrs |
| Rate Form | H | 5hrs| 6hrs |
| Comment Field | L | 3hrs | 2hrs |
| User Profile | H | 8hrs | 5hrs |
| Invoice Delete | H | 3hrs | 3hrs |
| User Login | L | 3hrs | 3hrs |
| User Authentication | L | 6hrs | 5hrs |
| Dynamic Modal | L | 2hrs | 4hrs |
| PDF Creation | L | 3hrs | 2hrs |
| Content Layout | L | 10hrs | In Progress |
| App Styles | L | 10hrs | In Progress |
| Total | ---- | 42hrs| 44hrs |

## Helper Functions
TBD

#### SAMPLE.....
| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 A list of all supporting libraries and thier role in the project.

| Library | What it Does |
| --- | :---: |  
| Bootstrap | Used to help with base style and style reset |
| ReactStrap | bootstrap element integration with React |
| Node js | . |
| nodemon | . |
| Sequelize | . |
| pg | . |
| Express | . |
| React | . |
| Sequelize | . |
| body-parser | . |
| axios | . |
| express-route | . |



## Code Snippet

Snippets of code we are most proud of within the app front and end backend using React.

#### Bootstrap w/ React Dropdown to Populate Input field
```

this.toggleDropDown = this.toggleDropDown.bind(this);
this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      dropdownClick:null,
      inputValue:" "
    };

toggleDropDown(evt) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownClick: evt.target.value, //event dropdown click
      inputValue: evt.target.value
    });
  }

<InputGroup>
   <Input value={this.state.inputValue}/>
   <InputGroupButtonDropdown componentClass="select" placeholder="Select Rate" addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
       <DropdownMenu>
           <DropdownItem header>Rates</DropdownItem>
           <DropdownItem value="20.00">$20.00</DropdownItem>
           <DropdownItem value="40.00">$40.00</DropdownItem>
       </DropdownMenu>
  </InputGroupButtonDropdown>
</InputGroup>
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome |
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
