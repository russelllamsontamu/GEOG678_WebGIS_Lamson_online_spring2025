function findTopLeft(pointList) {   //finding the lat and long that would make up the top left corner of a box
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point=> {
            if (maxLat == null) //Brings in the first point and sets it to a number that is in the data list
            {
                maxLat = point.lat
                minLon = point.lon
            }
            else{ // checks the new/next point to see if it is the same as the previous, if not, will create new point until it finds the upper left most coordinates 
                if (point.lat > maxLat)
                {
                    maxLat = point.lat
                }
                if (point.long < minLon)
                {
                    minLong = point.lon
                }
            }
        }
    )
    return {"pointId": 1, "lat": maxLat, "lon": minLon}
}

function findTopRight(pointList) { //finding the lat and long that would make up the top right corner of a box
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point=> {
            if (maxLat == null) //Brings in the first point and sets it to a number that is in the data list
            {
                maxLat = point.lat
                minLon = point.lon
            }
            else{ // checks the new/next point to see if it is the same as the previous, if not, will create new point until it finds the upper right most coordinates 
                if (point.lat > maxLat)
                {
                    maxLat = point.lat
                }
                if (point.long > minLon)
                {
                    minLong = point.lon
                }
            }
        }
    )
    return {"pointId": 2, "lat": maxLat, "lon": minLon}
}

function findBottomLeft(pointList) { //finding the lat and long that would make up the bottom left corner of a box
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point=> {
            if (maxLat == null) //Brings in the first point and sets it to a number that is in the data list
            {
                maxLat = point.lat
                minLon = point.lon
            }
            else{ // checks the new/next point to see if it is the same as the previous, if not, will create new point until it finds the lower left most coordinates 
                if (point.lat < maxLat)
                {
                    maxLat = point.lat
                }
                if (point.long < minLon)
                {
                    minLong = point.lon
                }
            }
        }
    )
    return {"pointId": 3, "lat": maxLat, "lon": minLon}
}

function findBottomRight(pointList) { //finding the lat and long that would make up the bottom right corner of a box
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point=> {
            if (maxLat == null) //Brings in the first point and sets it to a number that is in the data list
            {
                maxLat = point.lat
                minLon = point.lon
            }
            else{ // checks the new/next point to see if it is the same as the previous, if not, will create new point until it finds the lower right most coordinates 
                if (point.lat < maxLat)
                {
                    maxLat = point.lat
                }
                if (point.long > minLon)
                {
                    minLong = point.lon
                }
            }
        }
    )
    return {"pointId": 4, "lat": maxLat, "lon": minLon}
}

function Run(){ //obtains the conrers of the box by creating a function which selects the item from the data which has the correct values
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftpoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight:topRightPoint,
        bottomLeft: bottomLeftpoint,
        bottomRight: bottomRightPoint
    }

    console.log("Bounding box computed for russell_lamson@tamu.edu: ");
    console.log(boundingBox);
}