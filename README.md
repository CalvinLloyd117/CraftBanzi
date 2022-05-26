# Craft-Banzi

This README serves to be your guide for the Barrett-Henzi Lab website build in *[Craft CMS](https://craftcms.com/)*. This guide will contain information relevant to maintaining and updating the website. The back-end of the website contains comments and information related to specific **entries** and **fields**, but this file provides quickstart info, and some general information related to the site.

## Front-End Information

The front-end of the website (what a user sees when they visit the website in their browser) consists of three main pages. These pages **Home/Index**, **Publications**, and **About** are templates (blank-slate structures) which are populated by **entries** which can be added, modified, or removed in the back-end. The front-end will dynamically respond to any changes made to the back-end and adjust the stucture accordingly. This means that modifications to the template code that comprises the website is not required in any way.

## Back-End Information

The back-end is what is responsible for modifying content on the site. The back-end is reached by navigating to /admin and logging in using username and password. Once logged in, you will find a series of tabs which are used to manage content.

### Keywords and Definitions
- **[Entry/Entries](https://craftcms.com/docs/3.x/entries.html):** A series of related **Fields** responsible for populating a certain template structure within the front-end.
  
- **[Field](https://craftcms.com/docs/3.x/assets-fields.html#settings):** A single piece of entry data. 
  
  For example, *Asset* fields expect an image to be added. In the case of an Asset Field, you can add a new asset by uploading a file, or selecting an existing asset. Other fields might be plain text, or checkboxes.
  
- **Section:** Sections are closely related to entries, and refer to a given portion of the front-end. Sections have a corresponding entry type which is filled out in order to add additional content to that section.

### Dashboard

Contains a list of Recent Entries, optional updates, and news regarding Craft CMS.

### Entries

The **Entries** tab is where the majority of content management will happen. This tab contains several entry structures, each of which is responsible for rendering a certain **section** or type of content. **Entries** are organized by the page that they are used to populate (Home/Index, Publications, and About). 

More information on the specific entry types can be found below in the ***Content Management*** section of the README.

### Categories 

There are several categories within the site that perform various functions related to the content, including controlling content ordering, and reducing user input repetition. Certain fields will ask for a category to be added. You can select an existing option from the category, or add a new category. 

**Note:** Spelling and capitalization matter here, so ensure that a category does not already exist with different capitalization/spelling before adding a redundant category.

#### Categories include:

- **Centre:** Refers to a university or equivelent institution.
- **Department:** A department (eg. Psychology) within a **Centre**
- **Journal Name:** The Name of a Journal where a paper might be published.
- **Lab Member Category:** Categories related to what role/position is held by lab members (eg. Master's Student, Research Assistant, etc.)
  
  **Note:** Adding a Lab Member Category will add an additional section to the *Lab Members* portion of the **About** page (and update the nav button dropdown menu) given that at lease one Lab Member entry exists that falls under that category. Lab Member category order within the back-end can be modified (drag and drop) to adjust the order of the Lab Member sections on the **About** page. 
  
- **Publication Year:** A year that a publication is published.
  
  **Note:** Adding a Publication Year category will add a new Section to the **Publications** page (and update the nav dropdown menu) that contains all publications that fall under that **Publication Year** Category. Order of the categories within the back-end is important. More recent years should appear at the top of the list of **Publication Year** categories to enforce the decending order of the publications (i.e more recent publications appear at the top of the page).
  
- **Education:** The highest education that a Past Lab Member has achieved.

  e.g. PhD, MSc.

- **Past Member Category:** Categories that make up the Past Lab Member section of the About Page.

  **Note:** Order of these categories within the back-end is important, and modifying it (drag and drop) will change the order that content is rendered in the front-end.
  
- **Publisher:** Category refers to various publishers who publish the Lab's publications.

### Assets

All assets (images) that have been directly uploaded to the back-end. Images that are uploaded to an entry may not appear here.

### Utilities

Contains System info, Database Backup, and more. Typically nothing should need to be done within this tab. If more information is required regarding **Utilities**, [here is the Craft documentation pertaining to it](https://craftcms.com/docs/3.x/extend/#modules-vs-plugins).

### Settings

Various CMS Settings related to System and Content. This is where the structure of **Fields** and **Sections** can be modified and routes can be added.

Generally speaking, settings should not need to be modified, and should not be unless you know what you are doing.

### Plugin Store 

Find and add new plugins to the CMS. In general, Plugins should be avoided and should not be installed unless they recieve adequate support and have no system vulnerabilities.

## Content Management

Managing content in a Content Management System (CMS) like ***Craft CMS*** is straight forward and easy, and does not require any modifications to be made to the front-end template code at all. All modification and additions to content can be done from the back-end with no programming knowledge, or knowledge of web development at all.

To manage the CMS, and add, modify, or remove content, ensure that you are signed into the back-end by navigating to /admin and entering the username and password for the admin account. All Content management steps assume you have logged in.

### Entries

Most content management is related to adding, modifying, and removing entries. Each section of the website that has dynamic content (content that can be modified or added to i.e pretty much all of it) has a corresponding **Entry** type that is responsible for the content that users interact with in the front-end when visiting the site in their browser. These entry types include the following:

#### Home/Index

Entry types that are responsible for rendering content on the **Home/Index** page.

##### Home Carousel Entry

- Each **Home Carousel Entry** is responsible for a single slide found in the carousel at the top of the **Home** page. The first entry in the Home Carousel is likely the first thing that a user will see when they visit the site, and as such should be reserved to a Home Carousel Entry like *Our Focus* which describes what the lab does generally.

  Other uses for this entry type could be News and Events related to the lab, like important conferences/talks being given by a lab member.

##### Project

- Each **Project** entry is responsible for rendering a single project that someone in the lab is working on. These entries appear towards the top of the **Home/Index** Page.

##### Field Site

- **Field Site** Entries share a very similar structure to **Projects**. Each **Field Site** entry renders a single field site, which will be located at the bottom of the **Home/Index** Page

#### Publications

Entry type that is responsible for rendering content on the **Publications** page.

##### Publication

- Each Publication entry is responsible for a single publication found on the **Publication** page. 

  **Note:** Citations for publications are automatically derived from the fields within a Publication. If you prefer to add a manual citation, you can use the Manual Citation Field in the Publication entry to overide this feature.

  **Note:** Publications will be ordered based on the **Publication Year** category selected for the entry, with most recent **Publication Years** appearing at the top. Within a **Publication Year**, entries will be ordered based on the order they are found within The Publication Entries section of the back-end, with the most recent entries (those appearing at the top of the list) appearing first.

#### About

Entry types that are responsible for rendering content on the **About** page.

##### About Carousel Entry

- This entry type follows the same structure found in Home Carousel Entry, the difference being the carousel where it is found. These entries are responsible for a single slide found in the carousel at the top of the **About** page. 

  Uses for this entry include things like lab related news and activities that are open to the public. 

##### Lab Member Profile

- Each **Lab Member Profile** entry is responsible for rendering a single lab member profile block found within the **About** page. 
  
  **Lab Member Profiles** are first ordered by the Lab Member Categories List, with the categories at the top of the list appearing at the top of the page. Within a Lab Member Category, **Lab Member Profile** entries are placed in the order that they are found in the Lab Member Profile Entry List, with entries at the top appearing first.

##### Past Lab Members

- Each **Past Lab Member** Entry renders a list item within the Past Lab Member section of the **About** page.

  Past Lab Members are first ordered by the Past Member Category order, with Categories at the top of the list appearing first. Within a Past Member Category, entries are ordered by the order they are found in the Past Lab Members Entry list.

##### Current Collaborator

- Entries for anyone currently working with the lab on a project, but who is not a full-fledged Lab Member.

  Current Collaborator order is determined by the order the entries appear in the back-end, with entries at the top of the list appearing first.
  
### Adding Content

Adding content to the site is very straight forward. To add some content, follow these steps:

1. Navigate to the **Entries* Tab in the back-end.
2. Select the entry type you wish to add, and click new entry, or select New entry from the drop-down list.
3. Fill out the Entry Form completely, ensuring that all **Fields** indicated with a * are filled out. If the Entry is not entirely filled out, it cannot be added the the site. However, incomplete entries will be placed in a draft state, and you can always come back to finish it later.
4. Once the entry has been filled out, select *Create Entry* at the top right.

Most **Fields** within an entry are straight forward, and have instructions above them. 

However, certain fields are a little more complex including:

- **Matrix Blocks**:
  Matrix blocks allow you to select from a variety of preset content blocks, and choose the one best suited for your needs or use case. 
  
  ![image](https://user-images.githubusercontent.com/45299786/170581987-41edfd2d-7b8f-4b07-a1d3-eb89b27a37f9.png)

  For example, when adding project contributors, you can choose from three options (Lab Member, Current Collaborator, and Name Input Field) to add as a contributor to the project. 
  
  ![image](https://user-images.githubusercontent.com/45299786/170582197-3a86a46f-c87a-46ad-9805-5a7effe05731.png)

  After choosing an option from the matrix, you will be given a block to fill out based on your selection. 
  
  In Some cases, you may have the option to add multiple blocks from a matrix, depending on the situation. You may need multiple blocks for your content, and in some cases, the order of the blocks matters In the example above, the order of the blocks determines the order that the project collaborators will be added to the project. If you make a mistake, or need to adjust the order, you can drag/drop the blocks to modify the order.

- **Assets**
  
  Either Add an asset (that already exists in the back-end) or select Upload a file, which will prompt you to choose an asset to upload from your computer.
  
- 
 
