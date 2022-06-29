Three common request data formats used with XHR are:
 - query string (or URL-encoded)
 - JSON
 - XML

Sending data (such as when `POST`ing or `PUT`ing) requires using a _data serialization_ format understood by the server.  URL encoding mimics how information is stored in a URL (`name=value` pairs delimited by `&`).  JSON is a string that has a similar format to object notation in JavaScript.  XML is an older format that resembles HTML, though can have many different tags.


Three common response data formats used with XHR are:
  - HTML
  - JSON
  - XML

Simple `GET` requests often return HTML (such as navigating to any user-viewable web page).  APIs which are returning data to be used in programs will often use JSON or XML.