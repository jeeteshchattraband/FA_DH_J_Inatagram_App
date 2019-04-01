webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Picolo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__image_list_image_list_component__ = __webpack_require__("../../../../../src/app/image-list/image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__image_image_component__ = __webpack_require__("../../../../../src/app/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes__ = __webpack_require__("../../../../../src/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_guard_service__ = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__otheruser_otheruser_component__ = __webpack_require__("../../../../../src/app/otheruser/otheruser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_semantic_ui__ = __webpack_require__("../../../../ng2-semantic-ui/dist/public.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__image_list_image_list_component__["a" /* ImageListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_24__comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_25__otheruser_otheruser_component__["a" /* OtheruserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["e" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["f" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["b" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_26_ng2_semantic_ui__["a" /* SuiModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_18__services_authentication_guard_service__["a" /* AuthenticationGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_21__services_upload_service__["a" /* UploadService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-container{\n    margin:24px;\n    box-shadow:#555 1px 2px 8px 1px;\n    min-height: 660px;\n    min-width: 900px;\n    background-position: center;\n    background-repeat: no-repeat;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n\nbody{\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin-bottom: 50px;\n  background: cadetblue;\n}\nh4{\n  margin: 5px 20px;\n}\n\n.ui.comments .reply.form textarea {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.ui.comments .comment .metadata{\n  padding-right: 3em;\n  float:right;\n}\n.ui.comments .comment .actions a{\n  margin-left: 2.5em;\n}\n.ui.form .field {\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n}\n\n.ui.primary.button {\n  margin-left: 1.5em;\n  margin-bottom: 1.5em;\n}\n.author{\n  margin-left: 2em;\n}\n.ui.comments:first-child {\n  padding-top: 2em;\n}\nspan{\n  float: right;\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: 300;\n}\n  \nhr{\n  border: 0;\n  height: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.ui.comments {\n\n  max-width: 650px;\n  max-height: 400px;\n  overflow: auto;\n}\n.comment-box{\n  min-height: 660px;\n  min-width: 500px;\n  margin: 24px;\n  background: #fff;\n}\n  p{\n    margin: 0 30px 15px;\n    font-weight: 300;\n    color: #333;\n    word-wrap: break-word;\n    background: #EEE;\n    padding: 5px 10px;\n}\n\n.header{\n  margin: 15px 20px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\nform{\n  margin: 10px 10px 30px 10px;\n}\n  \ninput[type=\"text\"], textarea{\n  margin: 5px 10px;\n  outline: none;\n  background: #efefef;\n  border: 0;\n}\n      \ntextarea{\n  resize: none;\n  width: 85%;\n}\n  \ninput[type=\"text\"]{\n  width: 50%;\n  margin-bottom: 15px;\n}\n\n.imageb{\n  background-size: contain;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-box\">\n    <!-- <div class=\"comment-form\">\n      <div class=\"header\">Add Your Comment</div>\n      <form>\n        <div>\n          <textarea id=\"comment\" rows=\"3\" cols=\"30\" placeholder=\"Comment\"></textarea>\n        </div>\n        <button type=\"submit\" (click)=\"addComment()\">COMMENT</button>\n      </form>\n    </div> -->\n    <!-- <div>\n      <h4 class=\"header\">Comments</h4>\n      <div id=\"comments\" *ngFor=\"let comment of comments | async\">\n              {{comment.data}}\n      </div>\n    </div> -->\n    <!-- <h3 class=\"comments-title\">\n      <span class=\"bagde\">{{comments.length}}</span>\n      Comments\n    </h3>\n    <ul class=\"media-list comment-detail-list\">\n      <li class=\"media\" *ngFor=\"let comment of comments | async\">\n        <div class=\"comment-box\">\n        <article>\n          <div class=\"pull-left comment-info\">\n            <a href=\"#\" class=\"author\">{{ comment.author }}</a><br />\n            <time>{{ comment.timestamp | date:\"MM/dd/yyyy\" }}</time>\n          </div>\n              <p>{{ comment.data }}</p>\n        </article>\n      </div>\n      </li>\n    </ul> -->\n\n    <div class=\"ui comments\">\n        <div class=\"comment\" >\n          <div class=\"content\" *ngFor=\"let comment of comments | async\">\n            <a class=\"author\">{{ comment.author }}</a>\n            <div class=\"metadata\">\n              <!-- <div class=\"date\">1 day ago</div> -->\n              <time>{{ comment.timestamp | date:\"MM/dd/yyyy\" }}</time>\n            </div>\n            <div class=\"text\">\n              <p> {{ comment.data }} </p>\n            </div>\n            <!-- <div class=\"actions\">\n              <a class=\"reply\">Delete</a>\n            </div> -->\n          </div>\n          \n        </div>\n        \n      </div>\n      <form class=\"ui reply form\">\n          <div class=\"field\">\n            <textarea id = \"comment\" placeholder=\"Comment\"></textarea>\n          </div>\n          <button class=\"ui primary button\" type=\"submit\" (click)=\"addComment()\">COMMENT</button>\n        </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_comment_model__ = __webpack_require__("../../../../../src/app/models/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentComponent = (function () {
    function CommentComponent(imageService, route, uploadService) {
        this.imageService = imageService;
        this.route = route;
        this.uploadService = uploadService;
        this.rootDir = '';
        this.keyi = '';
        this.comment = new __WEBPACK_IMPORTED_MODULE_3__models_comment_model__["a" /* Comment */]();
        this.userName = '';
        this.userName = this.imageService.getUserName().toString();
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.keyi = this.route.snapshot.params['id'];
        console.log('keyi value is' + this.keyi);
        this.comments = this.imageService.getComments(this.keyi);
        //this.userName = this.imageService.getUserName().toString();
    };
    CommentComponent.prototype.displaycomment = function () {
        this.comments = this.imageService.getComments(this.keyi);
        console.log('Comments are' + this.comments);
    };
    CommentComponent.prototype.addComment = function () {
        // console.log('Image key is :' + this.route.snapshot.params['id']);
        var data = document.getElementById('comment').value;
        // console.log(data);
        // console.log('Inside addComment');
        var user = this.imageService.getUserId(); // Need to be used for navigating to the imagelist of user
        // console.log(user);
        this.comment.author = this.userName;
        this.comment.data = data;
        // console.log(this.comment);
        var path = '/comments/' + this.keyi;
        this.uploadService.writeCommentData(this.comment, path);
        this.displaycomment();
        console.log(this.comment.timestamp);
        console.log(this.imageService.getUserName());
        // Reset the value of textbox
        document.getElementById('comment').value = "";
    };
    return CommentComponent;
}());
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_upload_service__["a" /* UploadService */]) === "function" && _c || Object])
], CommentComponent);

var _a, _b, _c;
//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"username-box\">\n      <div class=\"username-form\">\n        <div class=\"header\">Add Your Username</div>\n        <form>\n          <div>\n            <textarea id=\"username\" rows=\"3\" cols=\"30\" placeholder=\"Username\"></textarea>\n          </div>\n          <button type=\"submit\" (click)=\"onSubmitUsername()\">Add</button>\n        </form>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_userList_model__ = __webpack_require__("../../../../../src/app/models/userList.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(authService, router, authS, imageService, uploadService, db) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.authS = authS;
        this.imageService = imageService;
        this.uploadService = uploadService;
        this.db = db;
        this.authService.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.loggedInUserId = auth.uid;
            }
        });
        // console.log('Logged in user is ' + this.loggedInUserId);
        // console.log('Logged in user using ImageService is ' + this.imageService.getUserId);
        // console.log(this.users);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('in home component and user id is' + this.loggedInUserId);
        // this.isUserSet = true;
        this.users = this.imageService.getUsers();
        console.log(this.users);
        this.users.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot !== undefined && snapshot.userName !== null
                    && snapshot.userId === _this.loggedInUserId) {
                    _this.imageService.setUserName(snapshot.userName);
                    _this.username = snapshot.userName;
                    _this.router.navigate(['imagelist/' + _this.loggedInUserId]);
                }
            });
        });
        // this.isUserSet = false;
        this.wait(500);
        /* Check if username is set for cuurent logged in userid is set in the db.
        Only if it is set navigate to imagelist else set the username variable and render html for getting username*/
    };
    HomeComponent.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    /* Onclick submit of username write to db.Create 1 userlist model */
    HomeComponent.prototype.onSubmitUsername = function () {
        var data = document.getElementById('username').value;
        var userList = new __WEBPACK_IMPORTED_MODULE_4__models_userList_model__["a" /* UserList */](data, this.loggedInUserId);
        var path = '/userList/';
        this.uploadService.writeUserNameData(userList, path);
        this.username = data;
        // Set the username field in image service so that it can be retrieved later without querying to database.
        this.imageService.setUserName(data.toString());
        // this.isUserSet = true;
        this.router.navigate(['imagelist/' + this.loggedInUserId]);
    };
    HomeComponent.prototype.getUserName = function () {
        return this.username;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-list/image-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul { padding:0; width:1200px; margin:20px auto}\nli { display:inline;}\n\n.tn {\n  border: 4px solid #eee;\n  box-shadow:#555 1px 1px 8px 1px;\n  cursor: pointer;\n  width: 300px;\n}\n\nh2{\n  margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-list/image-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- instead of image.$key we can think of generating some random value\n async gives us an option to subscribe to observable images\n with image we have to display image-info component \n ( comnments and likes)-->\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"parent-container\">\n        <div fxLayout=\"row\">\n        </div>\n        <h4>{{currentUserName}}!</h4>\n        <md-grid-list cols=\"3\" rowHeight=\"200px\">\n            <md-grid-tile *ngFor=\"let image of images | async\" [routerLink]=\"['/image', image.$key]\">\n                <div class=\"thumbnail\">\n                    <md-card class=m yimages>\n                        <img src=\"{{image.url}}\" class=\"tn\">\n                    </md-card>\n                </div>\n            </md-grid-tile>\n        </md-grid-list>\n    </div>\n</div>\n    \n    "

/***/ }),

/***/ "../../../../../src/app/image-list/image-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageListComponent = (function () {
    /* Get logged in user in a variable using home component constructor code
    Set a flag and geeter method for that. Setter method for resettong the flag*/
    function ImageListComponent(imageService, route) {
        this.imageService = imageService;
        this.route = route;
    }
    ImageListComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.params['id'];
        console.log('Inside image-list ' + this.userId);
        /* set a flag if current_userid != loggedin userid */
        // this.images = null;
        this.images = this.imageService.getImages(this.userId); // pass user id here
        this.isCurrentUserLoggdeInUser();
        console.log('After service call ' + this.userId);
    };
    ImageListComponent.prototype.isCurrentUserLoggdeInUser = function () {
        var loggedInUserId = this.imageService.getUserId();
        var searchUserId = this.imageService.getCurrentUserId();
        if (loggedInUserId === searchUserId) {
            this.currentUserName = 'Welcome ' + this.imageService.getUserName();
        }
        else {
            this.currentUserName = 'ImageList for ' + this.imageService.getSearchUserName();
        }
    };
    return ImageListComponent;
}());
ImageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-list',
        template: __webpack_require__("../../../../../src/app/image-list/image-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-list/image-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ImageListComponent);

var _a, _b;
//# sourceMappingURL=image-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/image/image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-container{\n    margin:24px;\n    box-shadow:#555 1px 2px 8px 1px;\n    min-height: 660px;\n    min-width: 900px;\n    background-position: center;\n    background-repeat: no-repeat;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n\nbody{\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  margin-bottom: 50px;\n  background: cadetblue;\n}\nh4{\n  margin: 5px 20px;\n}\n  \nspan{\n  float: right;\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: 300;\n}\n  \nhr{\n  border: 0;\n  height: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.comment-box{\n  min-height: 660px;\n  min-width: 500px;\n  margin: 24px;\n  background: #fff;\n}\n  p{\n    margin: 0 30px 15px;\n    font-weight: 300;\n    color: #333;\n    word-wrap: break-word;\n    background: #EEE;\n    padding: 5px 10px;\n}\n\n.header{\n  margin: 15px 20px;\n  font-size: 27px;\n  font-weight: 600;\n}\n\nform{\n  margin: 10px 10px 30px 10px;\n}\n  \ninput[type=\"text\"], textarea{\n  margin: 5px 10px;\n  outline: none;\n  background: #efefef;\n  border: 0;\n}\n      \ntextarea{\n  resize: none;\n  width: 85%;\n}\n  \ninput[type=\"text\"]{\n  width: 50%;\n  margin-bottom: 15px;\n}\n\nbutton{\n  font-weight: 400;\n  margin: 12px 0 0 10px;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n  background: #D3775D;\n  padding: 12px 20px 12px 20px;\n  text-decoration: none;\n  transition: all .2s ease;\n\n}\n\n.imageb{\n  background-size: contain;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n  font-family: arial;\n}\n\n.like{\n  display: inline-block\n}\n#main-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background: white;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\n\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008A68;\n}\n\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\nsvg #heart {\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-animation: animateHeartOut .3s linear forwards;\n          animation: animateHeartOut .3s linear forwards;\n}\nsvg #main-circ {\n  -webkit-transform-origin: 29.5px 29.5px;\n          transform-origin: 29.5px 29.5px;\n}\n\n#checkbox {\n  display: none;\n}\n\n#checkbox:checked + label svg #heart {\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  fill: #E2264D;\n  -webkit-animation: animateHeart .3s linear forwards .25s;\n          animation: animateHeart .3s linear forwards .25s;\n}\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  -webkit-animation: animateCircle .3s linear forwards;\n          animation: animateCircle .3s linear forwards;\n  opacity: 1;\n}\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp1 #oval1 {\n  -webkit-transform: scale(0) translate(0, -30px);\n          transform: scale(0) translate(0, -30px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp1 #oval2 {\n  -webkit-transform: scale(0) translate(10px, -50px);\n          transform: scale(0) translate(10px, -50px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp2 #oval1 {\n  -webkit-transform: scale(0) translate(30px, -15px);\n          transform: scale(0) translate(30px, -15px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp2 #oval2 {\n  -webkit-transform: scale(0) translate(60px, -15px);\n          transform: scale(0) translate(60px, -15px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp3 #oval1 {\n  -webkit-transform: scale(0) translate(30px, 0px);\n          transform: scale(0) translate(30px, 0px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp3 #oval2 {\n  -webkit-transform: scale(0) translate(60px, 10px);\n          transform: scale(0) translate(60px, 10px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp4 #oval1 {\n  -webkit-transform: scale(0) translate(30px, 15px);\n          transform: scale(0) translate(30px, 15px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp4 #oval2 {\n  -webkit-transform: scale(0) translate(40px, 50px);\n          transform: scale(0) translate(40px, 50px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp5 #oval1 {\n  -webkit-transform: scale(0) translate(-10px, 20px);\n          transform: scale(0) translate(-10px, 20px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp5 #oval2 {\n  -webkit-transform: scale(0) translate(-60px, 30px);\n          transform: scale(0) translate(-60px, 30px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp6 #oval1 {\n  -webkit-transform: scale(0) translate(-30px, 0px);\n          transform: scale(0) translate(-30px, 0px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp6 #oval2 {\n  -webkit-transform: scale(0) translate(-60px, -5px);\n          transform: scale(0) translate(-60px, -5px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: .1s all .3s;\n}\n#checkbox:checked + label svg #grp7 #oval1 {\n  -webkit-transform: scale(0) translate(-30px, -15px);\n          transform: scale(0) translate(-30px, -15px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition: .5s transform .3s;\n}\n#checkbox:checked + label svg #grp7 #oval2 {\n  -webkit-transform: scale(0) translate(-55px, -30px);\n          transform: scale(0) translate(-55px, -30px);\n  -webkit-transform-origin: 0 0 0;\n          transform-origin: 0 0 0;\n  transition:1.5s -webkit-transform .3s;\n  transition:1.5s transform .3s;\n  transition: 1.5s transform .3s, 1.5s -webkit-transform .3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: .1s opacity .3s;\n}\n\n@-webkit-keyframes animateCircle {\n  40% {\n    -webkit-transform: scale(10);\n            transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    -webkit-transform: scale(11);\n            transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    -webkit-transform: scale(12);\n            transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    -webkit-transform: scale(13);\n            transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .5;\n  }\n  85% {\n    -webkit-transform: scale(17);\n            transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .2;\n  }\n  95% {\n    -webkit-transform: scale(18);\n            transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .1;\n  }\n  100% {\n    -webkit-transform: scale(19);\n            transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n\n@keyframes animateCircle {\n  40% {\n    -webkit-transform: scale(10);\n            transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    -webkit-transform: scale(11);\n            transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    -webkit-transform: scale(12);\n            transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    -webkit-transform: scale(13);\n            transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .5;\n  }\n  85% {\n    -webkit-transform: scale(17);\n            transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .2;\n  }\n  95% {\n    -webkit-transform: scale(18);\n            transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: .1;\n  }\n  100% {\n    -webkit-transform: scale(19);\n            transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n@-webkit-keyframes animateHeart {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n  }\n  40% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes animateHeart {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n  }\n  40% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes animateHeartOut {\n  0% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes animateHeartOut {\n  0% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=col-md-12>\n        <div [ngStyle]=\"{'background-image':'url('+ imageUrl +')'}\" class=\"img-container imageb\">\n        </div>\n        <div class =\"like\" >\n            <input type=\"checkbox\"  id=\"checkbox\" (click)='likeImage()' />\n            <label for=\"checkbox\">\n              <svg id=\"heart-svg\" viewBox=\"467 392 58 57\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Group\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(467 392)\"><path d=\"M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z\" id=\"heart\" fill=\"#AAB8C2\"/><circle id=\"main-circ\" fill=\"#E2264D\" opacity=\"0\" cx=\"29.5\" cy=\"29.5\" r=\"1.5\"/><g id=\"grp7\" opacity=\"0\" transform=\"translate(7 6)\"><circle id=\"oval1\" fill=\"#9CD8C3\" cx=\"2\" cy=\"6\" r=\"2\"/><circle id=\"oval2\" fill=\"#8CE8C3\" cx=\"5\" cy=\"2\" r=\"2\"/></g><g id=\"grp6\" opacity=\"0\" transform=\"translate(0 28)\"><circle id=\"oval1\" fill=\"#CC8EF5\" cx=\"2\" cy=\"7\" r=\"2\"/><circle id=\"oval2\" fill=\"#91D2FA\" cx=\"3\" cy=\"2\" r=\"2\"/></g><g id=\"grp3\" opacity=\"0\" transform=\"translate(52 28)\"><circle id=\"oval2\" fill=\"#9CD8C3\" cx=\"2\" cy=\"7\" r=\"2\"/><circle id=\"oval1\" fill=\"#8CE8C3\" cx=\"4\" cy=\"2\" r=\"2\"/></g><g id=\"grp2\" opacity=\"0\" transform=\"translate(44 6)\" fill=\"#CC8EF5\"><circle id=\"oval2\" transform=\"matrix(-1 0 0 1 10 0)\" cx=\"5\" cy=\"6\" r=\"2\"/><circle id=\"oval1\" transform=\"matrix(-1 0 0 1 4 0)\" cx=\"2\" cy=\"2\" r=\"2\"/></g><g id=\"grp5\" opacity=\"0\" transform=\"translate(14 50)\" fill=\"#91D2FA\"><circle id=\"oval1\" transform=\"matrix(-1 0 0 1 12 0)\" cx=\"6\" cy=\"5\" r=\"2\"/><circle id=\"oval2\" transform=\"matrix(-1 0 0 1 4 0)\" cx=\"2\" cy=\"2\" r=\"2\"/></g><g id=\"grp4\" opacity=\"0\" transform=\"translate(35 50)\" fill=\"#F48EA7\"><circle id=\"oval1\" transform=\"matrix(-1 0 0 1 12 0)\" cx=\"6\" cy=\"5\" r=\"2\"/><circle id=\"oval2\" transform=\"matrix(-1 0 0 1 4 0)\" cx=\"2\" cy=\"2\" r=\"2\"/></g><g id=\"grp1\" opacity=\"0\" transform=\"translate(24)\" fill=\"#9FC7FA\"><circle id=\"oval1\" cx=\"2.5\" cy=\"3\" r=\"2\"/><circle id=\"oval2\" cx=\"7.5\" cy=\"2\" r=\"2\"/></g></g></svg>\n            </label>\n        </div> \n        <div class=\"ui red horizontal label\" id = \"no_likes\" >{{ likes }} Likes </div> \n        <button (click)='deleteFileUpload()'\n        class=\"btn btn-danger btn-xs\" style=\"float: right; margin-right: 20px\">Delete</button> \n      </div>\n      <app-comment></app-comment>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageComponent = (function () {
    function ImageComponent(imageService, route, uploadService) {
        this.imageService = imageService;
        this.route = route;
        this.uploadService = uploadService;
        this.imageUrl = '';
        this.objRef = '';
        this.rootDir = '';
        this.likes = 0;
    }
    ImageComponent.prototype.getUrl = function (key) {
        var _this = this;
        this.imageService.getImage(key)
            .then(function (image) { return _this.imageUrl = image.url; });
    };
    ImageComponent.prototype.getFileUpload = function (key) {
        var _this = this;
        this.imageService.getImage(key)
            .then(function (imageUpload) { return _this.fileUpload = imageUpload; });
    };
    ImageComponent.prototype.ngOnInit = function () {
        this.getUrl(this.route.snapshot.params['id']);
        this.getFileUpload(this.route.snapshot.params['id']);
        this.get_likes();
    };
    // Method to get the number of likes from database
    ImageComponent.prototype.get_likes = function () {
        var _this = this;
        var keyi = this.route.snapshot.params['id'];
        this.imageService.getImage(keyi)
            .then(function (imageObj) { return _this.likes = imageObj.like; });
    };
    ImageComponent.prototype.deleteFileUpload = function () {
        console.log(this.route.snapshot.params['id']);
        console.log(this.fileUpload.name);
        console.log(this.fileUpload);
        console.log('inside deleteFileUpload');
        this.uploadService.removeUpload(this.fileUpload, this.route.snapshot.params['id']);
    };
    ImageComponent.prototype.likeImage = function () {
        var element = document.getElementById("checkbox");
        var isChecked = element.checked;
        var keyi = this.route.snapshot.params['id'];
        var user = this.imageService.getCurrentUserId(); // returns logged-in userid
        var db = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]();
        console.log(isChecked);
        if (isChecked) {
            var count = this.likes + 1;
            db.ref('/uploads' + '/' + user + '/' + keyi).update({ like: count });
        }
        else {
            var count = this.likes - 1;
            db.ref('/uploads' + '/' + user + '/' + keyi).update({ like: count });
        }
        this.get_likes();
    };
    return ImageComponent;
}());
ImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image',
        template: __webpack_require__("../../../../../src/app/image/image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image/image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]) === "function" && _c || Object])
], ImageComponent);

var _a, _b, _c;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  color: #111;\n  margin-top: 12%;\n  background-color: #fbfbfb; \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 60%;\n  padding: 5%;\n  border-radius: 3px;\n}\n\nh1.login-title {\n  padding-bottom: 50px;\n  font-family: \"Cabin\";\n  font-size: 32px;\n  color: #111;\n  text-align:center;\n}\n\nbutton{\n  height: 60px;\n  margin-top: 20px;\n  width: 100%;\n}\n\ninput {\n  font-size: 20px;\n  line-height: 60px;\n  height: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #loginForm=\"ngForm\">\n    <h1 class=\"login-title\">Log In</h1>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input class=\"form-control\" #emailControl=\"ngModel\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" maxlength=\"70\" email\n        required>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input class=\"form-control\" #passwordControl=\"ngModel\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" maxlength=\"70\"\n        type=\"password\" required>\n    </div>\n    <button [disabled]=\"!loginForm.form.valid\" id= \"loginbtn\" type=\"submit\" class=\"btn btn-info btn-lg\" (click)=\"signIn()\">Sign In</button>\n    <p *ngIf=\"errorMsg\" class=\"text-danger\">{{errorMsg}}</p>\n    <br><br>\n    <button id =\"signupbtn\" type=\"submit\" class=\"btn btn-info btn-lg\" (click)=\"signup()\">Sign Up</button>\n   \n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, afAuth) {
        this.authService = authService;
        this.router = router;
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.authService.login({ email: this.email, password: this.password })
            .then(function (resolve) { return _this.router.navigate(['home']); }) // home component
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(['signup']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
        this.timestamp = new Date().toDateString();
    }
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/followList.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowList; });
var FollowList = (function () {
    function FollowList(followName, followId) {
        this.followName = followName;
        this.followId = followId;
    }
    return FollowList;
}());

//# sourceMappingURL=followList.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/upload.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* Represents the data that we send to Firebase for upload */
var Upload = (function () {
    //comment: string;
    function Upload(file) {
        this.creationDate = new Date().toDateString();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/userList.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserList; });
var UserList = (function () {
    function UserList(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    return UserList;
}());

//# sourceMappingURL=userList.model.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand logo\" href=\"#\">{{ title }}</a>\n      </div >\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\" *ngIf=\"(user|async)?.uid\">\n            <!-- <li><a routerLink=\"imagelist/{{loggedUserId}}\">Image-List</a></li> -->\n            <li><a routerLink=\"/home\">Image-List</a></li>\n          <li><a routerLink=\"/upload\">Upload</a></li>\n          <li><input type=\"text\" id=\"search\" class=\"input\" style=\"margin-top: 12px;\"placeholder=\"search user..\">\n            <button type=\"submit\" (click)=\"profileSearch()\">Search</button></li>\n        </ul>\n        <ul class=\"nav navbar-nav account\">\n          <li *ngIf=\"!(user|async)?.uid\"><a routerLink=\"/login\">Log In</a></li>\n        </ul>\n        \n        <ul class=\"nav navbar-nav account\" style=\"float: right\">\n          <li *ngIf=\"(user|async)?.uid\"><a href=\"#\" (click)=\"logOut()\" style=\"float: right\">Log Out</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = (function () {
    // values = '';
    function NavBarComponent(authService, router, imageService, authFireService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.imageService = imageService;
        this.authFireService = authFireService;
        this.authFireService.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.loggedUserId = auth.uid;
            }
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.authUser();
        // this.isUserMapped = this.hComp.isUserSet;
    };
    /* onKey(value: string) {
      this.values += value;
      console.log(this.values);
    } */
    NavBarComponent.prototype.isUsernameSet = function () {
        return this.hComp.isUserSet;
    };
    NavBarComponent.prototype.profileSearch = function () {
        var _this = this;
        this.searchUserName = document.getElementById('search').value;
        console.log('Inside profileSearch ' + this.searchUserName);
        if (this.searchUserName !== null && this.searchUserName !== '') {
            this.users = this.imageService.getUsers(); // fetch list of all registered users
            this.users.subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    // check if the search username is a valid user in the list of registered users
                    if ((snapshot !== undefined) && (snapshot.userName === _this.searchUserName)) {
                        _this.imageService.setSearchUserName(_this.searchUserName); // save the username for search user
                        _this.router.navigateByUrl('otheruser/' + snapshot.userId);
                    }
                });
            });
        }
        // Map the username to userid again
    };
    NavBarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().then(function (onResolve) { return _this.router.navigate['/']; });
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
], NavBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/otheruser/otheruser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otheruser/otheruser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"username-box\">\n  <div class=\"username-form\">\n    <div class=\"header\">Please follow in order to see updates</div>\n    <form>\n      <button id=\"followbtn\" type=\"submit\" class=\"btn btn-info btn-lg\" (click)=\"onSubmitFollow()\">Follow</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/otheruser/otheruser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtheruserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_followList_model__ = __webpack_require__("../../../../../src/app/models/followList.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OtheruserComponent = (function () {
    function OtheruserComponent(router, route, imageService, uploadService, authService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.imageService = imageService;
        this.uploadService = uploadService;
        this.authService = authService;
        /* Get the logged in user */
        this.authService.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.loggedInUserId = auth.uid;
            }
        });
    }
    OtheruserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Inside Other-User ');
        this.searchUserId = this.route.snapshot.params['id'];
        this.followees = this.imageService.getFollowees(); // get followees list for the logged in user
        console.log(this.followees);
        this.followees.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                // check if the searchUser is in the followees list for the logged in user
                if (snapshot !== undefined && snapshot.followName !== null && snapshot.followId === _this.searchUserId) {
                    _this.router.navigate(['imagelist/' + _this.searchUserId]);
                }
            });
        });
        /* Get the search user name from the user id and also the follow list of logged in user
        if followlist contains search userid then navigate
        else render html page to follow/ */
        // this.router.navigateByUrl('imagelist/' + this.searchUserId);
    };
    /*Onclick = followbutton write to db (follow array<- search user)
   on successfull write navigate to searched user imagelist */
    OtheruserComponent.prototype.onSubmitFollow = function () {
        // const data = (<HTMLInputElement>document.getElementById('follow')).value;
        var followList = new __WEBPACK_IMPORTED_MODULE_5__models_followList_model__["a" /* FollowList */](this.imageService.getSearchUserName(), this.searchUserId);
        console.log(followList);
        var path = '/followList/' + this.loggedInUserId + '/';
        console.log(path);
        this.uploadService.writeFolloweesData(followList, path);
        this.router.navigate(['imagelist/' + this.searchUserId]);
    };
    return OtheruserComponent;
}());
OtheruserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-otheruser',
        template: __webpack_require__("../../../../../src/app/otheruser/otheruser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/otheruser/otheruser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_image_service__["a" /* ImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], OtheruserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=otheruser.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationGuard = (function () {
    function AuthenticationGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.user.map(function (auth) {
            if (!auth) {
                _this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthenticationService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthenticationService.prototype.authUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.createAccount = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = (function () {
    function ImageService(authService, dbService) {
        var _this = this;
        this.authService = authService;
        this.dbService = dbService;
        this.authService.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.userId = auth.uid;
            }
        });
        this.currentUser = this.userId;
    }
    /** normally observables are associated with return objects which are
                                                asked from server and can take time to process.
                                                In order to use them we need to subscribe to them*/
    ImageService.prototype.getImages = function (key) {
        this.currentUser = key;
        console.log('Inside getImages ');
        return this.dbService.list('uploads/' + key + '/'); // here while retrieving we can also send userid with uploads
    };
    /* method to retrieve image specific details using key */
    ImageService.prototype.getImage = function (key) {
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('uploads/' + this.currentUser + '/' + key).once('value')
            .then(function (snap) { return snap.val(); });
    };
    ImageService.prototype.getUsers = function () {
        return this.dbService.list('userList/');
    };
    ImageService.prototype.getFollowees = function () {
        return this.dbService.list('followList/' + this.userId + '/');
    };
    ImageService.prototype.getUserId = function () {
        return this.userId;
    };
    // method to retrieve image specific comments using key
    ImageService.prototype.getComments = function (key) {
        return this.dbService.list('comments/' + key);
    };
    ImageService.prototype.setUserId = function (uid) {
        this.userId = uid;
    };
    // Set the username for logged in user
    ImageService.prototype.setUserName = function (uname) {
        this.userName = uname;
        console.log(this.userName);
    };
    // Get the username of logged in user
    ImageService.prototype.getUserName = function () {
        return this.userName;
    };
    ImageService.prototype.setIsUserMapped = function (flag) {
        this.isUserMapped = flag;
    };
    ImageService.prototype.getIsUserMapped = function () {
        return this.isUserMapped;
    };
    // Set the username for logged in user
    ImageService.prototype.setLoggedInUserName = function (userName) {
        this.loggedInUserName = userName;
        console.log(this.loggedInUserName);
    };
    // Get the username for logged in user
    ImageService.prototype.getLoggedInUserName = function () {
        return this.loggedInUserName;
    };
    // Set the username for Search User
    ImageService.prototype.setSearchUserName = function (userName) {
        this.searchUserName = userName;
        console.log(this.searchUserName);
    };
    // Get the username for the search user
    ImageService.prototype.getSearchUserName = function () {
        return this.searchUserName;
    };
    // Get current User. So that we can access the owner of the concerned image while updating database
    ImageService.prototype.getCurrentUserId = function () {
        return this.currentUser;
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], ImageService);

var _a, _b;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_service__ = __webpack_require__("../../../../../src/app/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadService = (function () {
    function UploadService(ngFire, dbObject, imageService, router) {
        this.ngFire = ngFire;
        this.dbObject = dbObject;
        this.imageService = imageService;
        this.router = router;
        this.rootDir = '';
        this.userId = imageService.getUserId();
        this.rootDir = '/uploads/' + this.userId;
    }
    UploadService.prototype.uploadFile = function (upload) {
        var _this = this;
        // create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        // string interpolation for reference to the location where the file is to be stored
        var uploadTask = storageRef.child(this.rootDir + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"].TaskEvent.STATE_CHANGED, 
        // three observers registered
        // 1. 'state_changed' observer, called any time the state changes such as progress, pause or resume
        function (snapshot) {
            // upload in progress
            upload.status = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log('Upload is ' + upload.status + '% done');
        }, 
        // 2. Handles unsuccessful uploads
        function (error) {
            console.log(error);
        }, 
        // 3. Successful Uploads
        function () {
            // sets the properties for the Upload Model
            // upload.creationDate = new Date();
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            // upload.comment = 'Hello';
            // Set default value for like and dislike
            upload.like = 0;
            upload.dislike = 0;
            // upload.comment = null;
            console.log('Creation date!: ' + upload.creationDate);
            console.log(upload);
            _this.writeUploadData(upload);
        });
    };
    // Writes the file details to real time database
    UploadService.prototype.writeUploadData = function (upload) {
        this.dbObject.list(this.rootDir + "/").push(upload);
        console.log('File saved!: ' + upload.url);
        // this.router.navigate(['imagelist/' + this.userId]);
    };
    UploadService.prototype.removeUpload = function (upload, key) {
        var _this = this;
        this.deleteUploadData(key)
            .then(function () {
            _this.deleteUploadStorage(upload.name);
        });
    };
    // Deletes the file details from the realtime database
    UploadService.prototype.deleteUploadData = function (key) {
        return this.dbObject.list(this.rootDir + "/").remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteUploadStorage = function (name) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        storageRef.child(this.rootDir + "/" + name).delete();
        this.router.navigate(['imagelist/' + this.userId]);
    };
    // method to write commentdata into database
    UploadService.prototype.writeCommentData = function (comment, path) {
        this.dbObject.list(path).push(comment);
        console.log('Comment saved!: ' + comment);
    };
    // method to map UserName data into database for the corressponding UID
    UploadService.prototype.writeUserNameData = function (userList, path) {
        this.dbObject.list(path).push(userList);
        console.log('Username saved!: ' + userList);
    };
    // method to store followees list data into database for the logged in user
    UploadService.prototype.writeFolloweesData = function (followList, path) {
        this.dbObject.list(path).push(followList);
        console.log('Username saved!: ' + followList);
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__image_service__["a" /* ImageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UploadService);

var _a, _b, _c, _d;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form #signupForm=\"ngForm\">\n  <h1 class=\"Signup-title\">Signup</h1>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input class=\"form-control\" \n      #emailControl=\"ngModel\" \n      placeholder=\"Email\" \n      [(ngModel)]=\"email\" \n      name=\"email\" maxlength=\"70\" email required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input class=\"form-control\" \n    #passwordControl=\"ngModel\" \n    placeholder=\"Password\" \n    [(ngModel)]=\"password\" \n    name=\"password\" maxlength=\"70\" type=\"password\" required>\n  </div>\n  <button [disabled]=\"!signupForm.form.valid\" id= \"signUpbtn\" type=\"submit\" class=\"btn btn-info btn-lg\"\n    (click)=\"createAccount()\">Create account</button>\n    <p *ngIf=\"errorMsg\" class=\"text-danger\">{{errorMsg}}</p>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.createAccount = function () {
        var _this = this;
        this.authService.createAccount({ email: this.email, password: this.password })
            .then(function (resolve) { return _this.router.navigate(['login']); }) // a popup congratulating successful signup or an error
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding: 5%;\n    margin-top: 80px;\n  }\n  \n  .heading{\n      font-size: 24px;\n      margin-bottom: 30px;\n  }\n  \n  button{\n    height: 60px;\n    margin-top: 20px;\n    width: 100%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"currentUpload\">\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-animated\" \n    [ngStyle]=\"{ 'width': currentUpload?.status + '%' }\"></div>\n  </div>\n  Progress: {{currentUpload?.status}}% Complete\n</div>\n<div class=\"box\">\n  <h2 class=\"heading\">Upload New Images</h2>\n  <label>\n    <input type=\"file\" class=\"button\"\n    (change)=\"manageFiles($event)\" multiple>\n  </label>>\n  <button class=\"btn btn-primary\" \n  [disabled]= \"!selectedFiles\"\n  (click)=\"uploadFiles()\">Upload Images\n</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__("../../../../../src/app/models/upload.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // allows easy looping over an array of files
var UploadComponent = (function () {
    // injects the upload service
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    // listens to the change event when a user selects an input file
    UploadComponent.prototype.manageFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    UploadComponent.prototype.uploadFiles = function () {
        var _this = this;
        var filesToBeUploaded = this.selectedFiles;
        // console.log(_.range(filesToBeUploaded.length));
        var filesIndex = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](filesToBeUploaded.length);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](filesIndex, function (index) {
            // console.log(filesToBeUploaded[index]);
            _this.currentUpload = new __WEBPACK_IMPORTED_MODULE_2__models_upload_model__["a" /* Upload */](filesToBeUploaded[index]);
            _this.uploadService.uploadFile(_this.currentUpload);
        });
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], UploadComponent);

var _a;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  userprofile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserprofileComponent = (function () {
    function UserprofileComponent() {
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserprofileComponent);

//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCGaqrZdqcK5-22E2CdlfUx1JjE0TthZ08',
        authDomain: 'new-instagram-app.firebaseapp.com',
        databaseURL: 'https://new-instagram-app.firebaseio.com',
        projectId: 'new-instagram-app',
        storageBucket: 'new-instagram-app.appspot.com',
        messagingSenderId: '512668751948'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_image_list_image_list_component__ = __webpack_require__("../../../../../src/app/image-list/image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_image_image_component__ = __webpack_require__("../../../../../src/app/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_otheruser_otheruser_component__ = __webpack_require__("../../../../../src/app/otheruser/otheruser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__ = __webpack_require__("../../../../../src/app/services/authentication-guard.service.ts");








var appRoutes = [
    { path: 'imagelist/:id', component: __WEBPACK_IMPORTED_MODULE_0__app_image_list_image_list_component__["a" /* ImageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__["a" /* AuthenticationGuard */]] },
    { path: 'otheruser/:id', component: __WEBPACK_IMPORTED_MODULE_6__app_otheruser_otheruser_component__["a" /* OtheruserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__["a" /* AuthenticationGuard */]] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_3__app_upload_upload_component__["a" /* UploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__["a" /* AuthenticationGuard */]] },
    { path: 'image/:id', component: __WEBPACK_IMPORTED_MODULE_1__app_image_image_component__["a" /* ImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__["a" /* AuthenticationGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__app_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_authentication_guard_service__["a" /* AuthenticationGuard */]] },
    { path: '', redirectTo: '/imagelist', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__app_signup_signup_component__["a" /* SignupComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map