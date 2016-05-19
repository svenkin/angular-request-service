# Angular Request Service
Add the following module as dependency: ```'angular-request-service'```

### requestServiceProvider
The modules exposes following Provider to set base Settings:
```requestServiceProvider.setBaseUrl("http://musterseite.com");```
--> Set the baseUrl of all requests

```requestServiceProvider.defaultCaching(true);```
--> Set the defaultCaching (if nothing is set defaultCaching is true)

**If the url you want to use is another then the baseUrl+your url then simply but an ```!!``` in front of your url and it wont add the baseUrl**

### RequestService
Caching is only available for get Requests !!!
* The ```RequestService``` currently supports: get, post, put, delete!
* All requests return a promise 

**RequestService.get(url,config,force)**:
* url: baseUrl from Provider + url given via param
* config: config object (see $http config)
* force: if force is true data will be fetched from server not from cache

**RequestService.post/put(url,data,config)**:
* url: baseUrl from Provider + url given via param
* data: data to send to the server
* config: config object (see $http config)

**RequestService.delete(url,config)**:
* url: baseUrl from Provider + url given via param
* force: if force is true data will be fetched from server not from cache
* 
### Examples
##### Get

Url resolves to ```http://www.amazon.de``` even if url is set something else in the provider.
```
  RequestService.get('!!http://www.amazon.de', {}, true)
    .then(function (suc) {
        //Success goes here
    }, function (err) {
        //Error goes here
    })
```