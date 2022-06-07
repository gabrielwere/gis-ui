# GIS UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Design

![Screenshot of the user interface](/design.png)

## What it is

This is the user interface for  a GIS application which given a crop and a user selected criteria,it should display locations in Kenya where the crop can be grown,in order of suitability i.e the best points are shown first.

## How it works

* You choose a crop<br>(Check out [this repository](https://github.com/gabrielwere/knowledge-base-connector) to see where the crop data is stored)
* Select criteria<br>

    - What this means is that,the points will be sorted in order of     proximity to the criterion chosen.
    - Available criteria:

        * Roads
        * Urban Areas
        * Airfields
        * Roads & Urban Areas
        * Roads & Airfields
        * Urban Areas & Airfields
        * Roads,Urban Areas & Airfields

    - Take `roads` for example,suppose `roads` is chosen as the criteria,the locations displayed first will be locations which have enough rainfall,good soil and optimum temperature to grow the selected crop and are closest to roads.<br>
    Check out [this repository](https://github.com/gabrielwere/agricultural-decision-maker-api) to see how the rainfall,soil and temperature data is stored as well as how the locations are sorted.
* After confirming the details,click the `GET COORDINATES` button after which the points will be displayed,as shown below :

### Sample image
![Screenshot of the results](/results.png)

## Technologies

1. React.
2. React Leaflet.
3. Leaflet.
4. Leaflet-geometryutil.
5. React Icons.
6. Turf Bbox.
7. Mapbox/leaflet-pip

Check `package.json` for more details on the dependencies.

## Additional information

Check out the [Agricultural Decision Maker API](https://github.com/gabrielwere/agricultural-decision-maker-api) and the [Knowledge Base Connector](https://github.com/gabrielwere/knowledge-base-connector) repositories as they are utilised by this user interface.<br>

## BTW
My project supervisor thought my design sucked...I agreed(actually, she thought the  whole project sucked...I disagreed).