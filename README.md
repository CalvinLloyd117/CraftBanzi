# Craft-Banzi

This README serves to be your guide for the Barrett-Henzi Lab website build in *[Craft CMS](https://craftcms.com/)*. This guide will contain information relevant to maintaining and updating the Website. The back-end of the website contains comments and information related to specific entries and fields, but this file provides quickstart info, and some general information related to the site.

## Front-End Information

The front-end of the website (what a user sees when they visit the website in their browser) consists of three main pages. These pages (Home/Index, Publications, About) are templates (blank-slate structures) which are populated by entries which can be added, modified, or removed in the back-end. The front-end will dynamically respond to any changes made to the backend, and adjust the stucture accordingly. This means that modifications to the code of the website are not required in any way.

## Back-End Information

The back-end is what is responsible for modifying content on the site. The back-end is reached by navigating to /admin and logging in using username and password. Once logged in, you will find a series of tabs which are used to manage content.

### Keywords and Definitions
- **[Entry/Entries](https://craftcms.com/docs/3.x/entries.html):** A series of related *Fields* responsible for populating a certain template structure within the front-end.
  
- **[Field](https://craftcms.com/docs/3.x/assets-fields.html#settings):** A single piece of entry data. 
  
  For example, *Asset* fields expect an image to be added. In the case of an Asset Field, you can add a new asset by uploading a file, or selecting an existing asset.
  
- **Section:** Sections are closely related to entries, and refer to a given portion of the front-end. Sections have a corresponding entry type which is filled out in order to add additional content to that section.


### Dashboard

Contains a list of Recent Entries, optional updates, and news regarding Craft CMS.

### Categories 

There are several categories within the site that perform various functions related to the content, including controlling content ordering, and reducing user input repetition. Certain fields will ask for a category to be added. You can select an existing option from the category, or add a new category. 

**Note:** Spelling and capitalization matter here, so ensure that a category does not already exist with different capitalization/spelling before adding a redundant category.

#### Categories include:

- **Centre:** Refers to a university or equivelent institution.
- **Department:** A department (eg. Psychology) within a **Centre**
- **Journal Name:** The Name of a Journal where a paper might be published.
- **Lab Member Category:** Categories related to what role/position is held by lab members (eg. Master's Student, Research Assistant, etc.)
  
  **Note:** Adding a Lab Member Category will add an additional section to the *Lab Members* portion of the about page (and update the nav button dropdown menu) given that at lease one Lab Member entry exists that falls under that category. Lab Member category order within the back-end can be modified (drag and drop) to adjust the order of the Lab Member sections on the About page.
  
- **Publication Year:** A year that a publication is published.
  
  **Note:** Adding a Publication Year category will add a new Section to the Publications page (and update the nav dropdown menu) that contains all publications that fall under that Year Category. Order of the categories within the back-end is important. More recent years should appear at the top of the list of *Publication Year* categories to enforce the decending order of the publications (i.e more recent publications appear at the top of the page).
  
- **Education:** The highest education that a Past Lab Member has achieved.

  e.g. PhD, MSc

- **Past Member Category:** Categories that make up the Past Lab Member section of the About Page.

  **Note:** Order of these categories within the back-end is important, and modifying it (drag and drop) will change the order that content is rendered in the front-end.
  
- **Publisher:** Category refers to various publishers who publish the Lab's publications.

### Assets

All assets (images) that have been directly uploaded to the back-end. Images that are uploaded to an entry may not appear here.

### Utilities

Contains System info, Database Backup, and more. Typically nothing should need to be done within this tab. If more information is required regarding Utilities, [here is the Craft documentation pertaining to it](https://craftcms.com/docs/3.x/extend/#modules-vs-plugins).
