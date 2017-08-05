"use strict"
define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var o=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:r.default});(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,r){function n(e){var n=e[0]
return n&&"function"==typeof n.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+n,!1),(0,r.taskHelperClosure)("cancelAll",[n,a])}Object.defineProperty(e,"__esModule",{value:!0}),e.cancelHelper=n
var a="the 'cancel-all' template helper was invoked"
e.default=t.default.Helper.helper(n)}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,r){function n(e,t){return(0,r.taskHelperClosure)("perform",e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.performHelper=n,e.default=t.default.Helper.helper(n)}),define("dummy/helpers/route-task",["exports","ember-route-task-helper/helpers/route-task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"routeTask",{enumerable:!0,get:function(){return t.routeTask}})}),define("dummy/helpers/task",["exports","ember"],function(e,t){function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}function n(e){return Array.isArray(e)?e:Array.from(e)}function a(e){var t=n(e),a=t[0],o=t.slice(1)
return a._curry.apply(a,r(o))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Helper.helper(a)}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0]
if(!1!==r.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,o=r.default.exportApplicationGlobal
a="string"==typeof o?o:t.default.String.classify(r.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/routes/application",["exports","ember-concurrency"],function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o,l,u,i=Ember.Route,s=(l=o=function(e){function t(){var e,a,o,l
r(this,t)
for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c]
return a=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),u.call(o),l=a,n(o,l)}return a(t,e),t}(i),u=function(){this.taskOnApplicationRoute=(0,t.task)(regeneratorRuntime.mark(function e(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a]
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.timeout)(1e3)
case 2:return e.abrupt("return",n)
case 3:case"end":return e.stop()}},e,this)}))},l)
e.default=s}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+zY+TMJM",block:'{"statements":[[11,"h2",[]],[15,"id","title"],[13],[0,"Welcome to Ember"],[14],[0,"\\n\\n"],[1,[26,["outlet"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Ro6J/LMt",block:'{"statements":[[6,["with"],[[33,["route-task"],["taskOnApplicationRoute","Freddie"],null]],null,{"statements":[[6,["if"],[[28,["task","isIdle"]]],null,{"statements":[[0,"    "],[11,"button",[]],[16,"onclick",[33,["perform"],[[28,["task"]],"Morecurry"],null],null],[13],[0,"\\n      Perform taskOnApplicationRoute\\n    "],[14],[0,"\\n"]],"locals":[]},{"statements":[[0,"    "],[11,"button",[]],[16,"onclick",[33,["cancel-all"],[[28,["task"]]],null],null],[13],[0,"\\n      Cancel taskOnApplicationRoute\\n    "],[14],[0,"\\n\\n      Running taskOnApplicationRoute\\n"]],"locals":[]}],[0,"\\n  "],[11,"br",[]],[13],[14],[0,"\\n  task.last.value: "],[1,[28,["task","last","value"]],false],[11,"br",[]],[13],[14],[0,"\\n  task.last.error: "],[1,[28,["task","last","error"]],false],[11,"br",[]],[13],[14],[0,"\\n"]],"locals":["task"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",r=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(r)),a={default:n}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({})
