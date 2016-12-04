System.register(['@angular/core', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1;
    var CountdownComponent, TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            CountdownComponent = (function () {
                function CountdownComponent() {
                    var _this = this;
                    this.complete = new core_1.EventEmitter();
                    this.progress = new core_1.EventEmitter();
                    this.intervalId = setInterval(function () { return _this.tick(); }, 1000);
                }
                CountdownComponent.prototype.tick = function () {
                    if (--this.seconds < 1) {
                        clearTimeout(this.intervalId);
                        // Un evento es emitido cuando finalice la cuenta atrás
                        this.complete.emit(null);
                    }
                    this.progress.emit(this.seconds);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CountdownComponent.prototype, "seconds", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CountdownComponent.prototype, "complete", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CountdownComponent.prototype, "progress", void 0);
                CountdownComponent = __decorate([
                    core_1.Component({
                        selector: 'countdown',
                        template: '<h1>Quedan: {{seconds}}</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountdownComponent);
                return CountdownComponent;
            }());
            TimerComponent = (function () {
                function TimerComponent() {
                }
                TimerComponent.prototype.onCountdownCompleted = function () {
                    alert('¡Tiempo Acabado!');
                };
                TimerComponent.prototype.pepe = function () {
                    document.write("tiempo acabado");
                };
                TimerComponent.prototype.hola = function () {
                    document.getElementById("demo").innerHTML = "Hello World";
                };
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'timer',
                        directives: [CountdownComponent],
                        template: "<div class=\"container text-center\">\n               <img src=\"assets/img/reloj2.png\" />\n               <countdown [seconds]=\"3\" (complete)=\"pepe()\" (progress)=\"hola()\">\n               ></countdown>\n               <h1 id=\"demo\"></h1>\n             </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            platform_browser_dynamic_1.bootstrap(TimerComponent);
        }
    }
});
