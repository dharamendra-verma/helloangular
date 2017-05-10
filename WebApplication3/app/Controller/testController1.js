var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
var global;
(function (global) {
    var testController1 = (function () {
        function testController1($scope) {
            var _this = this;
            this.B = 120;
            this.result = 120;
            this.A = 120;
            this.calculateSum = function () {
                _this.result = _this.A + _this.B;
                _this.greeting = "Hi from calculateSum";
            };
            $scope.count = 12;
            this.greeting = "Hello from Application";
        }
        return testController1;
    }());
    testController1.$inject = ['$scope'];
    var EngineBase = (function () {
        function EngineBase(horsePower, engineType) {
            this.horsePower = horsePower;
            this.engineType = engineType;
        }
        EngineBase.prototype.start1 = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.engineType);
            }, 1000);
        };
        return EngineBase;
    }());
    var Accessory = (function () {
        function Accessory(accessoryNumber, title) {
            this.accessoryNumber = accessoryNumber;
            this.title = title;
        }
        return Accessory;
    }());
    var Auto = (function () {
        function Auto(BasePrice, Make, Model, engine) {
            this.BasePrice = BasePrice;
            this.Make = Make;
            this.Model = Model;
            this.distance = 0;
            this.speed = 50;
            this.Engine = engine;
            this.distance = 0;
            //this.speed = 50;
        }
        Object.defineProperty(Auto.prototype, "Power", {
            get: function () {
                return this._power;
            },
            set: function (value) {
                this._power = value;
            },
            enumerable: true,
            configurable: true
        });
        Auto.prototype.start = function () {
            console.log(this.Model + ' is running');
            this.timerToken = setInterval(this.RunPerSecond.bind(this), 500);
        };
        Auto.prototype.start1 = function (callback) {
            var _this = this;
            window.setTimeout(function () {
                callback(true, _this.Model);
            }, 1000);
        };
        Auto.prototype.addAcessories = function () {
            var acessories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                acessories[_i] = arguments[_i];
            }
            this.accessorryList = '';
            for (var i = 0; i < acessories.length; i++) {
                var ac = acessories[i];
                this.accessorryList += ac.accessoryNumber + ' ' + ac.title + '<bt />';
            }
        };
        Auto.prototype.getAccosryList = function () {
            return this.accessorryList;
        };
        Auto.prototype.stop = function () {
            clearInterval(this.timerToken);
            console.log(this.Model + ' is stopped');
        };
        Auto.prototype.RunPerSecond = function () {
            console.log('RunPerSecond');
            var dist = this.speed * 1000 / (60 * 60);
            this.distance = this.distance + dist;
            console.log(this.Model + ' run : ' + this.distance);
        };
        return Auto;
    }());
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(seats, basePrice, make, model, engine) {
            var _this = _super.call(this, basePrice, make, model, engine) || this;
            _this.seats = seats;
            return _this;
        }
        return Car;
    }(Auto));
    angular.module('app').controller('testController1', testController1);
})(global || (global = {}));
//# sourceMappingURL=testController1.js.map