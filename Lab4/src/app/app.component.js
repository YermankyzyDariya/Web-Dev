"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.routes = exports.Child = exports.User = void 0;
var core_1 = require("@angular/core");
var comments_1 = require("./comments");
var common_1 = require("@angular/common");
var home_1 = require("./home/home");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var forms_3 = require("@angular/forms");
var core_2 = require("@angular/core");
var common_2 = require("@angular/common");
var common_3 = require("@angular/common");
var reverse_js_1 = require("./reverse.js");
var User = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            template: " Hello Universe  {{ city }}, {{ 1 + 1 }}  \n  Username: {{ username }}",
            styles: "\n    :host {\n      color: #a144eb;\n    }\n  ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.username = 'youngTech';
            this.logoUrl = '/logo.svg';
            this.logoAlt = 'Angular logo';
            this.favoriteFramework = '';
        }
        User_1.prototype.showFramework = function () {
            alert(this.favoriteFramework);
        };
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
var Child = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <section>\n      <app-user />\n    </section>\n  ",
            imports: [User],
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    @if (isServerRunning) {\n      <span>Yes, the server is running</span>\n    } @else {\n      <span>No, the server is not running</span>\n    }\n  ",
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    @for (user of users; track user.id) {\n      <p>{{ user.name }}</p>\n    }\n  ",
        }), (0, core_1.Component)({
            selector: 'app-root',
            styleUrls: ['app.css'],
            template: " <div [contentEditable]=\"isEditable\"></div> ",
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <section (mouseover)=\"showSecretMessage()\">\n      There's a secret message for you, hover to reveal:\n      {{ message }}\n    </section>\n  ",
        }), (0, core_1.Component)({
            selector: 'app-user',
            template: " <p>The user's name is {{ name() }}</p> ",
        }), (0, core_1.Component)({
            selector: 'app-child',
            styles: "\n    .btn {\n      padding: 5px;\n    }\n  ",
            template: " <button class=\"btn\" (click)=\"addItem()\">Add Item</button> ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Child = _classThis = /** @class */ (function () {
        function Child_1() {
            this.addItemEvent = (0, core_1.output)();
        }
        Child_1.prototype.addItem = function () {
            this.addItemEvent.emit('🐢');
        };
        return Child_1;
    }());
    __setFunctionName(_classThis, "Child");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Child = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Child = _classThis;
}();
exports.Child = Child;
(0, core_1.Component)({
    selector: 'app-root',
    template: "\n    <div>\n      <h1>How I feel about Angular</h1>\n      <article>\n        <p>\n          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view\n          feature that makes defer loading content the easiest and most ergonomic it could possibly\n          be. The Angular community is also filled with amazing contributors and experts that create\n          excellent content. The community is welcoming and friendly, and it really is the best\n          community out there.\n        </p>\n        <p>\n          I can't express enough how much I enjoy working with Angular. It offers the best developer\n          experience I've ever had. I love that the Angular team puts their developers first and\n          takes care to make us very happy. They genuinely want Angular to be the best framework it\n          can be, and they're doing such an amazing job at it, too. This statement comes from my\n          heart and is not at all copied and pasted. In fact, I think I'll say these exact same\n          things again a few times.\n        </p>\n        <p>\n          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view\n          feature that makes defer loading content the easiest and most ergonomic it could possibly\n          be. The Angular community is also filled with amazing contributors and experts that create\n          excellent content. The community is welcoming and friendly, and it really is the best\n          community out there.\n        </p>\n        <p>\n          I can't express enough how much I enjoy working with Angular. It offers the best developer\n          experience I've ever had. I love that the Angular team puts their developers first and\n          takes care to make us very happy. They genuinely want Angular to be the best framework it\n          can be, and they're doing such an amazing job at it, too. This statement comes from my\n          heart and is not at all copied and pasted. In fact, I think I'll say these exact same\n          things again a few times.\n        </p>\n        <p>\n          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view\n          feature that makes defer loading content the easiest and most ergonomic it could possibly\n          be. The Angular community is also filled with amazing contributors and experts that create\n          excellent content. The community is welcoming and friendly, and it really is the best\n          community out there.\n        </p>\n        <p>\n          I can't express enough how much I enjoy working with Angular. It offers the best developer\n          experience I've ever had. I love that the Angular team puts their developers first and\n          takes care to make us very happy. They genuinely want Angular to be the best framework it\n          can be, and they're doing such an amazing job at it, too. This statement comes from my\n          heart and is not at all copied and pasted.\n        </p>\n      </article>\n\n      @defer (on viewport) {\n        <comments />\n      } @placeholder {\n        <p>Future comments</p>\n      } @loading (minimum 2s) {\n        <p>Loading comments...</p>\n      }\n    </div>\n  ",
    imports: [comments_1.Comments],
});
(0, core_1.Component)({
    selector: 'app-user',
    template: "\n    <p>Username: {{ username }}</p>\n    <p>Preferred Framework:</p>\n    <ul>\n      <li>\n        Static Image:\n        <img ngSrc=\"/logo.svg\" alt=\"Angular logo\" width=\"32\" height=\"32\" />\n      </li>\n      <li>\n        Dynamic Image:\n        <img [ngSrc]=\"logoUrl\" [alt]=\"logoAlt\" width=\"32\" height=\"32\" />\n      </li>\n    </ul>\n  ",
    imports: [common_1.NgOptimizedImage],
});
exports.routes = [
    {
        path: '',
        title: 'App Home Page',
        component: home_1.Home,
    },
    {
        path: 'user',
        title: 'App User Page',
        component: User,
    },
];
var CarService = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <nav>\n      <a routerLink=\"/\">Home</a>\n      |\n      <a routerLink=\"/user\">User</a>\n    </nav>\n    <router-outlet />\n  ",
            imports: [router_1.RouterOutlet, router_1.RouterLink],
        }), (0, core_1.Component)({
            selector: 'app-user',
            template: "\n    <p>Username: {{ username }}</p>\n    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>\n    <label for=\"framework\">\n      Favorite Framework:\n      <input id=\"framework\" type=\"text\" [(ngModel)]=\"favoriteFramework\" />\n    </label>\n  ",
            imports: [forms_1.FormsModule],
        }), (0, core_1.Component)({
            selector: 'app-user',
            template: "\n    <p>Username: {{ username }}</p>\n    <p>Framework: {{ favoriteFramework }}</p>\n    <label for=\"framework\">\n      Favorite Framework:\n      <input id=\"framework\" type=\"text\" [(ngModel)]=\"favoriteFramework\" />\n    </label>\n    <button (click)=\"showFramework()\">Show Framework</button>\n  ",
            imports: [forms_1.FormsModule],
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"handleSubmit()\">\n      <input type=\"text\" formControlName=\"name\" />\n      <input type=\"email\" formControlName=\"email\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n\n    <h2>Profile Form</h2>\n    <p>Name: {{ profileForm.value.name }}</p>\n    <p>Email: {{ profileForm.value.email }}</p>\n  ",
            imports: [forms_3.ReactiveFormsModule],
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <form [formGroup]=\"profileForm\">\n      <input type=\"text\" formControlName=\"name\" name=\"name\" />\n      <input type=\"email\" formControlName=\"email\" name=\"email\" />\n      <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\n    </form>\n  ",
            imports: [forms_3.ReactiveFormsModule],
        }), (0, core_2.Injectable)({
            providedIn: 'root',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CarService = _classThis = /** @class */ (function () {
        function CarService_1() {
            this.cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];
        }
        CarService_1.prototype.getCars = function () {
            return this.cars;
        };
        CarService_1.prototype.getCar = function (id) {
            return this.cars[id];
        };
        return CarService_1;
    }());
    __setFunctionName(_classThis, "CarService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarService = _classThis;
}();
var App = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            template: " <p>Car Listing: {{ display }}</p> ",
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: " {{ username | lowercase }} ",
            imports: [common_2.LowerCasePipe],
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: "\n    <ul>\n      <li>Number with \"decimal\" {{ num | number: '3.2-2' }}</li>\n      <li>Date with \"date\" {{ birthday | date: 'medium' }}</li>\n      <li>Currency with \"currency\" {{ cost | currency }}</li>\n    </ul>\n  ",
            imports: [common_3.DecimalPipe, common_3.DatePipe, common_3.CurrencyPipe],
        }), (0, core_1.Component)({
            selector: 'app-root',
            template: " Reverse Machine: {{ word | reverse }} ",
            imports: [reverse_js_1.ReversePipe],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var App = _classThis = /** @class */ (function () {
        function App_1() {
            this.city = 'San Francisco';
            this.isServerRunning = true;
            this.users = [
                { id: 0, name: 'Sarah' },
                { id: 1, name: 'Amy' },
                { id: 2, name: 'Rachel' },
                { id: 3, name: 'Jessica' },
                { id: 4, name: 'Poornima' },
            ];
            this.isEditable = true;
            this.message = '';
            this.profileForm = new forms_2.FormGroup({
                name: new forms_2.FormControl(''),
                email: new forms_2.FormControl(''),
            });
            this.carService = (0, core_1.inject)(CarService);
            this.display = this.carService.getCars().join(' ⭐️ ');
            this.username = 'yOunGTECh';
            this.num = 103.1234;
            this.birthday = new Date(2023, 3, 2);
            this.cost = 4560.34;
            this.word = 'You are a champion';
        }
        App_1.prototype.showSecretMessage = function () {
            this.message = 'Way to go 🚀';
        };
        App_1.prototype.handleSubmit = function () {
            alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
        };
        return App_1;
    }());
    __setFunctionName(_classThis, "App");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        App = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return App = _classThis;
}();
exports.App = App;
