/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
module global {
    class testController1 {

        static $inject = ['$scope'];
        private greeting: string;
         B: number = 120;
         result: number = 120;
         A: number = 120;

        constructor($scope) {
            $scope.count = 12;
            this.greeting = "Hello from Application";
        }

        calculateSum = () => {
            this.result = this.A + this.B;
            this.greeting = "Hi from calculateSum";
        }
    }

    interface IEngine {
        start1(callback: (startStatus: boolean, engineType: string) => void): void;
    }

    class EngineBase implements IEngine {
        constructor(public horsePower: number, public engineType: string) { }

        start1(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout(
                () => {
                    callback(true, this.engineType);
                },
                1000
            );
        }
    }

    class Accessory {
        constructor(public accessoryNumber: number, public title: string) { }
    }

    class Auto {
        distance: number = 0;
        speed: number = 50;
        timerToken: number;
        private _power: string;
        Engine: EngineBase;
        accessorryList: string;

        constructor(public BasePrice: number,
            public Make: string,
            public Model: string,
            engine: EngineBase) {
            this.Engine = engine;
            this.distance = 0;
            //this.speed = 50;
        }

        get Power(): string {
            return this._power;
        }

        set Power(value: string) {
            this._power = value;
        }

        start() {
            console.log(this.Model + ' is running');
            this.timerToken = setInterval(this.RunPerSecond.bind(this), 500);
        }

        start1(callback: (startStatus: boolean, model: string) => void) {
            window.setTimeout(
                () => {
                    callback(true, this.Model);
                },
                1000
            )
        }

        addAcessories(...acessories: Accessory[]) {
            this.accessorryList = '';
            for (var i = 0; i < acessories.length; i++) {
                var ac = acessories[i];
                this.accessorryList += ac.accessoryNumber + ' ' + ac.title + '<bt />';
            }

        }

        getAccosryList() {
            return this.accessorryList;
        }

        stop() {
            clearInterval(this.timerToken);
            console.log(this.Model + ' is stopped');
        }

        RunPerSecond() {
            console.log('RunPerSecond');
            var dist = this.speed * 1000 / (60 * 60);
            this.distance = this.distance + dist;
            console.log(this.Model + ' run : ' + this.distance);
        }
    }

    class Car extends Auto {
        seats: number
        constructor(seats: number, basePrice: number, make: string, model: string, engine: EngineBase) {
            super(basePrice, make, model, engine);
            this.seats = seats;
        }
    }

   angular.module('app').controller('testController1', testController1);
}