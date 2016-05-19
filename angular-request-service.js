angular.module('angular-request-service', [])
    .provider('requestService', function RequestServiceProvider() {
        var config = {};
        config.defaultCaching = true;
        config.baseUrl = '';

        this.defaultCaching = function (value) {
            config.defaultCaching = value;
        };
        this.setBaseUrl = function (value) {
            config.baseUrl = value;
        };

        this.$get = function () {
            return config;
        };
    })
    .factory('RequestService', function ($q, $http, requestService) {
        var service = {};
        var baseConfig = {
            cache: requestService.defaultCaching
        }

        function mergeConfigs(config, force) {
            var newConfig = baseConfig;
            angular.forEach(config, function (value, key) {
                newConfig[key] = value;
            });
            if (force === true) {
                newConfig.cache = false;
            }
            return newConfig;
        }

        function checkUrl(url) {
            var useUrl = '';
            if (url.indexOf('!!') > -1) {
                useUrl = url.slice(2);
            } else {
                useUrl = requestService.baseUrl + url;
            }
            return useUrl;
        }
        service.get = function (url, config, force) {
            var q = $q.defer();
            $http.get(checkUrl(url), mergeConfigs(config, force)).then(function (suc) {
                q.resolve(suc);
            }, function (err) {
                q.reject(err);
            })
            return q.promise;
        };
        service.post = function (url, data, config) {
            var q = $q.defer();
            $http.post(checkUrl(url), data, config).then(function (suc) {
                q.resolve(suc);
            }, function (err) {
                q.reject(err);
            })
            return q.promise;
        };
        service.put = function (url, data, config) {
            var q = $q.defer();
            $http.put(checkUrl(url), data, config).then(function (suc) {
                q.resolve(suc);
            }, function (err) {
                q.reject(err);
            })
            return q.promise;
        };
        service.delete = function (url, config) {
            var q = $q.defer();
            $http.delete(checkUrl(url), config).then(function (suc) {
                q.resolve(suc);
            }, function (err) {
                q.reject(err);
            })
            return q.promise;
        };
        return service;
    })