 # Description

`mobile flashcards` is a filing card system, created to help students to repeatingly answer questions on a chosen topic.
One can add a topic (deck), along with questions, delete a deck and start quizzes. 
After having finished a quiz, a score shows how many answeres have been correct.

# Installation

* clone this repo ```git clone https://github.com/ChrisPaj/reactnd-project-mobile-flashcards.git```
* run `npm i` to install `mobile flashcards` with all its dependencies

# Starting and Viewing the App

* install the expo app on your mobile device (Android or iOS) and start it
* To get the app started on your PC, run `npm start`.
* You will be shown a QR code and an URI (something similar to exp://192.168.2.107:19000)
* Scan the QR code (Anriod) or type the URI into the corresponding field within the expo app

# Usage

On the startpage you may switch to a quiz by pressing a deck or add a new deck via the bottom navigation.
## Switching to the Quiz View
The Quiz View offers you the alternatives of 
* starting a quiz
* deleting a deck or 
* adding a question to the deck

### Starting a quiz
Watch the question, think about the answer and press "Show Answer" to verify.
Press correct or incorrect, depending on if you were right or not
After having run through all questions you are shown your score 

### Deleting a quiz
By deleting a quiz all questions and answeres and the deck itself will be deleted from the database and from the store

## Adding a deck
The Tab Navigation offers the possibility to add a new deck to the existing ones

# Reminder
`mobile flashcards` has an optional built-in reminder function which sends a daily notification if no quiz has been finished. 

