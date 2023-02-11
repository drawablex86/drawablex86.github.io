
---

title: Introduction to Tana
feed: show 
date: 11-05-2022
permalink: /tana-intro
tag: "PKM"

---
-   Fields

	-   Fields are place where can house the meta data for any given tana node
	-   Components of fields can be turned into tags and super tags
	-   You configure a field using cmd k, just like how you would specific property types in notion - number, rating, etc
	-   Fields can be also instances (for forcing nodes with supertags, and have super tags pile up as auto suggestions)

-   Nodes

	-   There are no pages or blocks in tana. Every line is a node. And a node can be anything.

-   Super Tag - Supertags - the MVP of tana

	-   These are tags that can be configured to do something
	-   Super tags allows easy templating of meta data - Default content
	-   Add different fields here
	-   The field will occupy the meta data you want to add
	-   For example - Book xzy with super Tag book
		-  it can have an author field, topic field, summary, quotes and reading status
		-   The field input can also be tags

	-   Super tags can be used to configure SOPs into a given note type - for example in the field section you can have it link to a page with instructions or to a predefine list of checklist
	-   Benefits of turning a tag into a super tag

		-   They will have inheritance properties

		-   "I can have author tag inherit from people tag" - Cortex Future
		-   That is a huge deal. Like we have people and we can have author, creator, director, writer tags based on different context and tana will allow you to have all these come under the "people" tag
	-   How to do this

	-   Click the normal tag
	-   Click configure
	-   Go to the advance menu
	-   Select "Extend an existing tag" and select the super tag you want

-   With the inheritance property, once you search for a tag, the search will also show up all the nested tag inside the larger tag; For example searching people - will give you results such as artists, doctors, lawyer etc