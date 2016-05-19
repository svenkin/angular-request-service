# Angular Request Service
## Installing
Via bower: ```bower install angular-request-service```

Add the ```'angular-request-service.js'``` to your index file and add the following module as dependency: ```'angular-request-service'```

### requestServiceProvider
The modules exposes following Provider to set base Settings:
```requestServiceProvider.setBaseUrl("http://musterseite.com");``` --> Set the baseUrl of all requests

```requestServiceProvider.defaultCaching(true);``` --> Set the defaultCaching (if nothing is set defaultCaching is true)

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

## MIT LICENSE
Copyright (c) 2016 Sven Kinzel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.