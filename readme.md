# Marvel Data Manipulation

### characters

1. Print out every name to the terminal.

1. Get a list of every character and their ID, as an object.

  ```
  { "3-D Man": 1011334, ... }
  ```

1. Get a list of every character and their description, as an object. Remove any characters without a description.

  ```
  { 
    "Abomination (Emil Blonsky)": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk."
  }
  ```

1. Return an array of all the names of the comics "Adam Warlock" has been in.

1. Return the name of all characters who are "available" in less than 10 comics.


### mystique

1. For "Mystique", return the name of the all stories where the type is "cover".

1. Return an array of all the thumbnails for the characters as full paths.

  ```
  ["http://i.annihil.us/u/prod/marvel/i/mg/4/03/528d33b473550.jpg", ...]
  ```

1. Were any of the resources modified after the year 2000? Create a function that returns true or false to evaluate if so.


### series

1. Return an object for all "creators" on "Cable (1993 - 2002)". The keys should be the "role" assigned to each creator and the value is an array of the names.

1. Return an object where the keys are the series' "title" and the value is an array of the characters in that series.

1. Find which series started before the year 2000 which has the most available comics.