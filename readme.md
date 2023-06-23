# Milestone Project 2 - Star Trek Quiz 

## Purpose

This website was created for Code Institute's Milestone Project 2 assignment. The purpose of the project is to demonstrate an understanding and practical application of Javascript. It also puts into practice knowledge and techniques learned so far on the Full Stack Development course. A full list of technologies used can be found of in the technologies section of this document. 

The live website can be found [here](https://siondawson.github.io/milestone-project-2/index.html)

## Star Trek Quiz Responsive Website

(TECHSINI IMG HERE)

The project is a quiz based on Star Trek and is intented as a fun game for users. Users will be presented with a series of ten question, each with four possible answer to choose from. 

# User Experience Design

## User Stories

### First Time Visitor Stories

#### As a first time user, I want:

1. To be able to easily understand the purpose of the site.
2. To be able to play the quiz right away, without needing any instruction.
3. To test my knowledge about Star Trek.
4. To know many many questions I got right.
5. To view the site on any device.

#### As a returning user, I want:

1. To play the quiz again. 
2. To improve my score. 

#### As a frequent user, I want:

1. To master the quiz.
2. Get a perfect score.

# Structure 

## Bootstrap

Bootstrap 5 was used to structure the website. The sites layout is fairly simple this was put into place first. A mobile first apporach was used where the sites layour was first imagined for mobile screens and scaled up for larger screens. The required elements were few enough that the sites appearence is mainly the small on all screen sizes. 

## Home Page

Only a simple home page will be required. The user will be presented with the LCARS style panel along with a Starfleet badge and instructions on how to play the quiz. Underneath this there will be a button to take the user to the quiz. 

## Quiz - user interface

On page load the user will see the layout of the quiz. They will need to click a button at the bottom to begin the quiz. Once clicked the user will be presented with the first question. The user will not be able to skip to the next question until an answer is selected. Once an answer is selected the selection will turn green if correct or red if incorrect. The user will not be able to change their answer once a selection has been made. 

Once a selection has been made the next question button will be enabled and user will be able to move on to the next quesiton. 

A button allowing the user to quit the quiz to the homepage will be visible at all times. 

# Design

## Appearence

In order to present the user with an experience in keeping with the look and feel of Star Trek, I wanted the CSS to emulate the look of the computer panels in the show. In preperation for this project I disvered a CSS template to achieve this. This was modified for my own needs as is as presented in the project. 

## Color scheme 

The colors we're used from those identified in [this github repository](https://github.com/frohoff/ctfd-trektheme). Three colors were chosen for the main 'LCARS' panels, the rest were put into array that allowed their random application to the answer buttons each time a new question is loaded. Darker colors which caused contrast issues we're removed. 

## 'LCARS' Panels 

Library Computer Access/ Retrieval System (LCARS). Fictional computer system designed by Michael Okuda which first appeared in Star Trek: The Next Generation.

Using the above github repository I studied the use of divs and CSS borders to achieve the 'LCARS' style look and modified for my own use. I created four seperate classes within style.css which could be applied to an outer div to create the desired look.  

## Quiz - design

The quiz itself will consist of ten questions drawn from a possible 21. The quiz will randomly select these question from four seperate arrays:

1. easyQuestions (6 objects)
2. mediumQuestions (6 objects)
3. hardQuestions (6 objects)
4. bonusQuestions (3 objects)

Three questions each will be selected from easy, medium and hard questions. One from the bonus questions. This approach presents the user with a different quiz each time.

This approach will allow for quiz questions to be modfied, changed or expanded on without needing to modify the functionality of the quiz itself. 

In any changes or new questions it must be ensured that the string 'correct' exactly matches the correct answer in the list of 'options' for the quiz to function correctly.   

