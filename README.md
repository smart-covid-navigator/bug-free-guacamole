# The SMART COVID Navigator Application

## About

SOON TO BE RE-WRITTEN
This app - based on the SMART Cancer Navigator (https://smart-cancer-navigator.github.io) aims to offer a location where patients and doctors can access their records from the Veterans Affairs or Center for Medicare and Medicaid Services servers, and get information on possible COVID-19 risk factors from clinical studies that have been done.


### Running a local instance of SMART Cancer Navigator
1. Ensure you have node/npm and the Angular CLI installed: ```npm install -g @angular/cli```.  
2. ```git clone https://github.com/smart-covid-navigator/Covid-Application /your/folder/path```
3. ```cd /your/folder/path```
4. ```npm install``` to install npm packages.  
5. ```git submodule init``` and then ```git submodule update --recursive``` to get required submodules.  
6. ```ng serve``` to serve the application, and then open it by either navigating to [localhost:4200](http://localhost:4200), which provides no SMART context, or via the HSPC sandbox and launch it using your new launch scenario.  