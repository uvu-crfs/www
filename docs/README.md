# Definitions

If you are looking for developer documentation go [here](development).


## Home

### Description

Home displays the top lowest usage in a graph for each sensor, based on the Start and End dates

When a group is currently visiting it will have the visiting groups information as the first group in the leaderboard.

When an admin is logged in and a group is currently visiting the admin can enter sensor data from this page.

### Usage

Dynamically view leaderboards based on date constraints

### Fields

Start (date) - Determines which sensor data to include in leaderboard display

End (date) - Determines which sensor data to include in leaderboard display

Count - Choose how many visits you want to show in the leaderboard

## Reports

### Description

Reports displays 3 reports (Affiliations, Departments and Courses), based on the Start and End dates (inclusive)

### Usage

Dynamically view reports based on date constraints

### Fields

Start (date) - Determines which sensor data to include in leaderboard display

End (date) - Determines which sensor data to include in leaderboard display


## Visits

### Description

Each group can have 0 or more visits.


### Usage Instructions

Start date and End date determine which dates can be used when adding sensor data for a Visit

### Fields

Group - Group to add visit for

Start Date - Date visit started

End Date - Date visit ended

Days - # of days for visit

Nights - # of nights for visit

Female Students - # of female students in group visit

Male Students - # of male students in group visit

Advisors - # of advisors in group visit

Evaluation Complete - Was Evaluation completed?

Summary Complete - Was Summary completed?

Darksky Tour Given - Was Darksky tour given?

Notes - Notes about visit

Contact - Contact person for visit


## Groups

### Description

Group represents the groups that sign up for and visit the CRFS i.e. Software III

### Usage Instructions

Group MUST be added before adding a visit to that group

### Fields

Name - Name of group


## Sensors

### Description

Sensors are used to track/store anything measurable. Sensor data can only be entered on dates included in Visits

### Usage

Sensors can only add measurements to dates between Start date and End date (inclusive)

### Fields

Sensor Name - Name of what is being tracked/measured     i.e. Trash

Units - Units of what we are tracking/measuring          i.e. Lbs.


## Affiliations

### Description

Affiliations are used to determine how groups are associated with universities, their departments and courses, as well as other institutions

### Usage

Affiliations, Departments and Courses can be added in the 'Affiliations' section and attached to visits in the 'Visits' section

### Fields

Affiliation - Name of the University or organization

Department - Name of the department (if university/college)

Course - Name of the course (if university/college)




## Example

1) A group must be added BEFORE any visits for that group can be added

Group:  

name - BYU Hockey

2) Group BYU Hockey can now add visits in the Visits tab

Visit:

start date - 6/9/2016

end date - 6/12/2016

3) Sensor data can now be added for any of the dates between 6/9/2016 AND 6/12/2016

Sensors:

Trash            6/9/2016         12 Lbs.

Water            6/11/2016        15 Gal.
