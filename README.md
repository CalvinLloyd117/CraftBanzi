# Craft-Banzi

This README serves to be your guide for the Barrett-Henzi Lab website build in *[Craft CMS](https://craftcms.com/)*. This guide will contain information relevant to maintaining and updating the website. The back-end of the website contains comments and information related to specific **entries** and **fields**, but this file provides quickstart info, and some general information related to the site.

### Keywords and Definitions
- **[Entry/Entries](https://craftcms.com/docs/3.x/entries.html):** A series of related **Fields** responsible for populating a certain template structure within the front-end.
  
- **[Field](https://craftcms.com/docs/3.x/assets-fields.html#settings):** A single piece of entry data. 
  
  For example, *Asset* fields expect an image to be added. In the case of an Asset Field, you can add a new asset by uploading a file, or selecting an existing asset. Other fields might be plain text, or checkboxes.
  
- **Section:** Sections are closely related to entries, and refer to a given portion of the front-end. Sections have a corresponding entry type which is filled out in order to add additional content to that section.

## Front-End

The front-end of the website (what a user sees when they visit the website in their browser) consists of three main pages. These pages **Home/Index**, **Publications**, and **About** are templates (blank-slate structures) which are populated by **entries** which can be added, modified, or removed in the back-end. The front-end will dynamically respond to any changes made to the back-end and adjust the stucture accordingly. This means that modifications to the template code that comprises the website is not required in any way.

## Back-End

The back-end is what is responsible for modifying content on the site. The back-end is reached by navigating to /admin and logging in using username and password. Once logged in, you will find a series of tabs which are used to manage content.

## Back-end Tabs, Navigation, and Overview

### Dashboard

Contains a list of Recent Entries, optional updates, and news regarding Craft CMS.

### Entries

The **Entries** tab is where the majority of content management will happen. This tab contains several entry structures, each of which is responsible for rendering a certain **section** or content element. **Entries** are organized by the page that they are used to populate (Home/Index, Publications, and About). 

More information on the specific entry types can be found below in the ***Content Management*** section of the README.

### Categories 

There are several categories within the site that perform various functions related to the content, including controlling content ordering, and reducing user input repetition. Certain fields will ask for a category to be added. You can select an existing option from the category, or add a new category. 

**Note:** Spelling and capitalization matter here, so ensure that a category does not already exist with different capitalization/spelling before adding a redundant category.

#### Categories include:

- **Centre:** Refers to a university or equivelent institution.
- **Department:** A department (eg. Psychology) within a **Centre**
- **Journal Name:** The Name of a Journal where a paper might be published.
- **Lab Member Category:** Categories related to what role/position is held by lab members (eg. Master's Student, Research Assistant, etc.)
  
  **Note:** Adding a Lab Member Category will add an additional section to the *Lab Members* portion of the **About** page (and update the nav button dropdown menu) given that at least one Lab Member entry exists that falls under that category. Lab Member category order within the back-end can be modified (drag and drop) to adjust the order of the Lab Member sections on the **About** page. 
  
- **Publication Year:** A year that a publication is published. Also includes an "In Press" category.
  
  **Note:** Adding a Publication Year category will add a new Section (denoted by the year header) to the **Publications** page (and update the nav dropdown menu) that contains all publications that fall under that **Publication Year** Category. Order of the categories within the back-end is important. More recent years should appear at the top of the list of **Publication Year** categories to enforce the decending order of the publications (i.e more recent publications appear at the top of the page). You will also need to ensure that the In Press category is always at the top of the **Publication Year** category list to ensure that it always appears first.
  
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

Managing content in a Content Management System (CMS) like ***Craft CMS*** is straight forward and easy, and does not require any modifications to be made to the front-end template code at all. All modifications and additions to content can be done from the back-end with no programming knowledge, or knowledge of web development.

To manage the CMS through adding, modifying, or removing content, you must ensure that you are signed into the back-end by navigating to /admin and entering the username and password for the admin account. **All content management steps assume you have logged in**.

### Entries and Entry Types

Most content management is related to adding, modifying, and removing entries. Each section of the website that has dynamic content (content that can be modified or added to i.e pretty much all of it) has a corresponding **Entry** type that is responsible for the content that users interact with in the front-end when visiting the site in their browser. These entry types include the following:

#### Home/Index Page

Entry types that are responsible for rendering content on the **Home/Index** page.

##### Home Carousel Entry

- Each **Home Carousel Entry** is responsible for a single slide found in the carousel at the top of the **Home** page. The first entry in the Home Carousel is likely the first thing that a user will see when they visit the site, and as such should be reserved to a Home Carousel Entry like *Our Focus* which describes what the lab does generally.

  Other uses for this entry type could be News and Events related to the lab, like important conferences/talks being given by a lab member.

##### Project

- Each **Project** entry is responsible for rendering a single project that someone in the lab is working on. These entries appear towards the top of the **Home/Index** Page.

##### Field Site

- **Field Site** Entries share a very similar structure to **Projects**. Each **Field Site** entry renders a single field site, which will be located at the bottom of the **Home/Index** Page

#### Publications Page

Entry type that is responsible for rendering content on the **Publications** page.

##### Publication

- Each Publication entry is responsible for a single publication found on the **Publication** page. 

  **Note:** Citations for publications are automatically derived from the fields within a Publication. If you prefer to add a manual citation, you can use the Manual Citation Field in the Publication entry to overide this feature.

  **Note:** Publications will be ordered based on the **Publication Year** category selected for the entry, with most recent **Publication Years** appearing at the top. Keep in mind that Publication Year order can be modified if needed to enforce this rule. See the **Modifying Section Order** section below. Within a **Publication Year**, entries will be ordered based on the order they are found within The Publication Entries section of the back-end, with the most recent entries (those appearing at the top of the list) appearing first.

#### About Page

Entry types that are responsible for rendering content on the **About** page.

##### About Carousel Entry

- This entry type follows the same structure found in Home Carousel Entry, the difference being the carousel where it is found. These entries are responsible for a single slide found in the carousel at the top of the **About** page. 

  Uses for this entry include things like lab related news and activities that are open to the public. 

##### Lab Member Profile

- Each **Lab Member Profile** entry is responsible for rendering a single lab member profile block found within the **About** page. 
  
  **Lab Member Profiles** are first ordered by the **Lab Member Categories** List, with the categories at the top of the list appearing at the top of the page. Within a Lab Member Category, **Lab Member Profile** entries are placed in the order that they are found in the Lab Member Profile Entry List, with entries at the top appearing first.

##### Past Lab Members

- Each **Past Lab Member** Entry renders a list item within the Past Lab Member section of the **About** page.

  Past Lab Members are first ordered by the Past Member Category order, with Categories at the top of the list appearing first. Within a Past Member Category, entry order is determined by the order they are found in the **Past Lab Members** Entry list.

##### Current Collaborator

- Entries for anyone currently working with the lab on a project/publication, but who is not a full-fledged Lab Member.

  Current Collaborator order is determined by the order the entries appear in the back-end, with entries at the top of the list appearing first.
  
### Adding Content

Adding content to the site is very straight forward. To add some content, follow these steps:

1. Navigate to the **Entries* Tab in the back-end.
2. Select the entry type you wish to add, and click new entry, or select New entry from the drop-down list.
3. Fill out the Entry Form completely, ensuring that all **Fields** indicated with a * are filled out. If the Entry is not entirely filled out, it cannot be added the the site. Incomplete entries will be placed in a draft state, and you can always come back to finish it later.
4. Once the entry has been filled out, select *Create Entry* at the top right. You must also ensure that the entry is *enabled* for it to appear on the live site. See **Disabling Content (temporary content hiding)** below.

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
  
  Either Add an asset (that already exists in the back-end) or select Upload a file, which will prompt you to choose an asset to upload from your computer. Image assets will automatically be sized to fit within the front-end. You do not need to worry about properly sizing images, the system will handle the image scaling on its own.
  
 **Note:** Depending where the image will appear, it may be sized differently. For example, the images uploaded to the **Project Background Image** field will fill the entire width of the project panel, and will overflow if necessary to avoid distorting the image. Images in this case also have a parallax effect attached to them which will introduce additional cropping on the top and bottom of the image. Conversely, **Lab Member Profile Picture** images will size themselves relative the the size of the content that they appear next to, but will not exceed the intrinsic dimensions of the image (i.e. if the image is 500x500 pixels, it will not grow to 900x900 pixels, becoming large and blurry to fill the space).
  
### Modifying Entry Content

Modifying content is just as easy as adding new content. To modify an existing entry, simply select the entry you wish to edit and adjust the fields within.

- Content within Matrix blocks can be changed, and blocks themselves may be re-ordered (drag and drop) or removed entirely.
- Images can be replaced by simply uploading a new image to the asset field.

### Modifying Entry Order

Modifying the order that entries appear within a section is as easy as dragging and dropping the entries in the back-end into a new order. Unless otherwise noted in the **Entries and Entry Types** section, entries are displayed in the front-end in the same order they appear in the **Structure** list in the back-end.

When in the back-end, ensure that entries are sorted in **Structure** order by selecting the entry sort button at the top right, and selecting **Structure**. 

![image](https://user-images.githubusercontent.com/45299786/170739197-f51f548f-7837-4435-836b-517d038e6e3c.png)

This displays the entries in a list in the same order that they will appear in the front-end. When sorted by **Structure**, entries can be **drag and dropped** into a new order which will subsequently change the order that entries will appear on the live site.

### Modifying Section Order

Section order is controlled by the order of the categories associated with entries on a given page. For example, the **About** page displays the **Lab Members** sections based on the order of the Lab Member Category associated with each **Lab Member** entry.

To modify the order that sections appear in the front-end, select the Categories tab on the Left side of the admin page. Then find the Category governing the order of the sections you wish to modify and click it to view those categories. Sort the categories by **Structure** by clicking the sorting button at the top right. Categories can now be re-ordered by dragging and dropping them into new locations within the list.

#### Drag and Drop

Drag and Drop functionality for entries, categories, and matrix blocks can be used by left clicking and holding on the _four-dots icon_, and moving the element to a new location and releasing the left click where you would like the element placed. 

![image](https://user-images.githubusercontent.com/45299786/170744893-46599427-8163-48d3-97ea-54ad255abf92.png)

### Removing Content

Removing content in Craft CMS is simple. All elements within the CMS (entries, categories, matrix blocks follow the same basic steps to be removed from the CMS. CMS elements can be **deleted**, which will **permanantly remove them from the website**, or they can be **Disabled** temporarily and re-enabled at a later date. 

#### Deleting Content

Content Elements are **deleted** by navigating to the appropriate tab on the /admin page, and selecting the each element you wish to delete with the checkbox on the left side of the element. 

![image](https://user-images.githubusercontent.com/45299786/170762994-987b8329-3bf5-4154-961b-66a35d686fae.png)

Once any number of elements are selected, they can be permanantly deleted by selecting the gear icon at the top of the page, and selecting **delete**.

![image](https://user-images.githubusercontent.com/45299786/170763182-6514c624-fee8-4681-89d6-c09a15138de2.png)

#### Disabling Content (temporary content hiding)

Content elements can be disabled temporarily at any time by navigating to the element you wish to disable, and clicking to edit the element. Once inside the editting interface, you will find a switch to disable the element on the right hand side.

![image](https://user-images.githubusercontent.com/45299786/170763776-d6842441-17f7-464c-a841-b18f59ba350f.png)

Alternatively, you can disable multiple elements at the same time by navigating to the entries section you wish to modify, and selecting multiple elements with their checkboxes on the left side of the entry list, and clicking **Set Status** and choosing enable/disable.

![image](https://user-images.githubusercontent.com/45299786/171670925-30193d03-6555-4012-9c35-2ae9c2e13385.png)

When disabled, the element will still exist in the database but will not be visible in the front-end of the site. Disabled elements can be re-enabled by clicking their enable/disable switch again.


