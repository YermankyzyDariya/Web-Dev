"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app/app.component");
(0, platform_browser_1.bootstrapApplication)(app_component_1.App)
    .catch(function (err) { return console.error(err); });
