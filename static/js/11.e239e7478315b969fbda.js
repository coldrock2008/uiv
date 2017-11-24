webpackJsonp([11],{199:function(s,t,a){var n=a(0)(a(223),a(245),null,null);s.exports=n.exports},223:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{"notification-example":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="notify" type="primary">Simplest Notification</btn>\n    <btn @click="notify2" type="primary">No Auto-dismiss Notification</btn>\n  </section>\n</div>',methods:{notify:function(){this.$notify("This is a simple notify msg.",function(){console.log("dismissed")})},notify2:function(){this.$notify({title:"Title",content:"This notification will not dismiss automatically.",duration:0}).then(function(){console.log("dismissed")})}}},"notification-types":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="info" type="info">Info</btn>\n    <btn @click="success" type="success">Success</btn>\n    <btn @click="warning" type="warning">Warning</btn>\n    <btn @click="danger" type="danger">Danger</btn>\n  </section>\n</div>',methods:{info:function(){this.$notify({type:"info",title:"Heads up!",content:"This alert needs your attention, but it's not super important."})},success:function(){this.$notify({type:"success",title:"Well done!",content:"You successfully read this important alert message."})},warning:function(){this.$notify({type:"warning",title:"Warning!",content:"Better check yourself, you're not looking too good."})},danger:function(){this.$notify({type:"danger",title:"Oh snap!",content:"Change a few things up and try submitting again."})}}},"notification-placements":{template:'<div class="markdown-live-example">\n  <section>\n    <btn @click="notify(\'top-right\')" type="primary">Top Right (Default)</btn>\n    <btn @click="notify(\'bottom-right\')" type="primary">Bottom Right</btn>\n    <btn @click="notify(\'bottom-left\')" type="primary">Bottom Left</btn>\n    <btn @click="notify(\'top-left\')" type="primary">Top Left</btn>\n  </section>\n</div>',methods:{notify:function(s){this.$notify({placement:s,title:"Title",content:"This is a notify msg at "+s+"."})}}},"notification-without-dismiss-btn":{template:'<div class="markdown-live-example">\n  <btn @click="notify" type="primary">Notification Without Dismiss Button</btn>\n</div>',methods:{notify:function(){this.$notify({title:"Title",content:"This is a notification without dismiss btn.",dismissible:!1})}}}}}},245:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("markdown-wrapper",[a("h1",{attrs:{id:"notification"}},[s._v("Notification "),a("a",{staticClass:"header-anchor",attrs:{href:"#notification","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("blockquote",[a("p",[s._v("Displays a global notification message at a corner of the page.")])]),s._v(" "),a("h2",{attrs:{id:"example"}},[s._v("Example "),a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Click on the button below to show a notification. By default, it is dismissible with a close button, and will dismiss automatically after 5000ms (both are configurable).")]),s._v(" "),a("notification-example",{ref:"notification-example"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"notify"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Simplest Notification"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"notify2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("No Auto-dismiss Notification"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// example with callback")]),s._v("\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// pass a String as the notification content")]),s._v("\n      notify () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify("),a("span",{attrs:{class:"hljs-string"}},[s._v("'This is a simple notify msg.'")]),s._v(", () => {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// callback after dismissed")]),s._v("\n          "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'dismissed'")]),s._v(")\n        })\n      },\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// example with Promise and options")]),s._v("\n      notify2 () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Title'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'This notification will not dismiss automatically.'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        }).then("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// resolve after dismissed")]),s._v("\n          "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'dismissed'")]),s._v(")\n        })\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- notification-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"types"}},[s._v("Types "),a("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("There're 4 optional types of notification: "),a("code",{pre:!0},[s._v("info")]),s._v(" / "),a("code",{pre:!0},[s._v("success")]),s._v(" / "),a("code",{pre:!0},[s._v("warning")]),s._v(" / "),a("code",{pre:!0},[s._v("danger")]),s._v(".")]),s._v(" "),a("p",[s._v("Notification with specific type will has a default icon on the left, you can also change or remove the icon by "),a("code",{pre:!0},[s._v("icon")]),s._v(" option.")]),s._v(" "),a("notification-types",{ref:"notification-types"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),s._v("Info"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),s._v("Success"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),s._v("Warning"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(">")]),s._v("Danger"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      info () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'info'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Heads up!'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'This alert needs your attention, but it\\'s not super important.'")]),s._v("\n        })\n      },\n      success () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Well done!'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'You successfully read this important alert message.'")]),s._v("\n        })\n      },\n      warning () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Warning!'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Better check yourself, you\\'re not looking too good.'")]),s._v("\n        })\n      },\n      danger () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'danger'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Oh snap!'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Change a few things up and try submitting again.'")]),s._v("\n        })\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- notification-types.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"placements"}},[s._v("Placements "),a("a",{staticClass:"header-anchor",attrs:{href:"#placements","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("Notifications can be placed on any corner on a page.")]),s._v(" "),a("p",[s._v("The "),a("code",{pre:!0},[s._v("position")]),s._v(" prop defines which corner a notification will slide in. It can be "),a("code",{pre:!0},[s._v("top-right")]),s._v(" (default), "),a("code",{pre:!0},[s._v("top-left")]),s._v(", "),a("code",{pre:!0},[s._v("bottom-right")]),s._v(" or "),a("code",{pre:!0},[s._v("bottom-left")]),s._v(".")]),s._v(" "),a("notification-placements",{ref:"notification-placements"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"notify('top-right')\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Top Right (Default)"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"notify('bottom-right')\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Bottom Right"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"notify('bottom-left')\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Bottom Left"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"notify('top-left')\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Top Left"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      notify (placement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          placement, "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// equal to `placement: placement` in ES6")]),s._v("\n          title: "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Title'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`This is a notify msg at "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${placement}")]),s._v(".`")]),s._v("\n        })\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- notification-placements.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"dismissible"}},[s._v("Dismissible "),a("a",{staticClass:"header-anchor",attrs:{href:"#dismissible","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("By default a notification is dismissible with a close button, you can hide it by setting "),a("code",{pre:!0},[s._v("dismissible")]),s._v(" to "),a("code",{pre:!0},[s._v("false")]),s._v(".")]),s._v(" "),a("notification-without-dismiss-btn",{ref:"notification-without-dismiss-btn"}),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"notify"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Notification Without Dismiss Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      notify () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$notify({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Title'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'This is a notification without dismiss btn.'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dismissible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        })\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- notification-without-dismiss-btn.vue --\x3e")]),s._v("\n")])]),s._v(" "),a("h2",{attrs:{id:"global-method"}},[s._v("Global Method "),a("a",{staticClass:"header-anchor",attrs:{href:"#global-method","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("$notify(options, callback)")]),s._v(" global method for "),a("code",{pre:!0},[s._v("Vue.prototype")]),s._v(" will be added "),a("strong",[s._v("if uiv is installed")]),s._v(".")]),s._v(" "),a("p",[s._v("Note that the dismissed callback is optional.")]),s._v(" "),a("p",[s._v("The method will return a "),a("code",{pre:!0},[s._v("Promise")]),s._v(" object that resolve while the notification is dismissed (if supported by browser or with es6 promise polyfill).")]),s._v(" "),a("h2",{attrs:{id:"import-individually"}},[s._v("Import Individually "),a("a",{staticClass:"header-anchor",attrs:{href:"#import-individually","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("If you prefer importing "),a("code",{pre:!0},[s._v("Notification")]),s._v(" individually:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Notification } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'uiv'")]),s._v("\n")])]),s._v(" "),a("p",[s._v("The corresponding method is "),a("code",{pre:!0},[s._v("Notification.notify")]),s._v(", with same parameters as above.")]),s._v(" "),a("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("h2",{attrs:{id:"notificationvue"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/tree/master/src/services/notification/Notification.vue"}},[s._v("Notification.vue")]),s._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#notificationvue","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("These props are used as "),a("code",{pre:!0},[s._v("options")]),s._v(" in the methods above.")]),s._v(" "),a("h3",{attrs:{id:"props"}},[s._v("Props "),a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[s._v("Name")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")]),s._v(" "),a("th",[s._v("Required")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("title")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The notification title.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("content")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The notification content.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("type")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Support: "),a("code",{pre:!0},[s._v("info")]),s._v(" / "),a("code",{pre:!0},[s._v("success")]),s._v(" / "),a("code",{pre:!0},[s._v("warning")]),s._v(" / "),a("code",{pre:!0},[s._v("danger")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("duration")])]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("5000")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Dismiss after milliseconds, use 0 to prevent self-closing.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("dismissible")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Show dismiss button.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("placement")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("top-right")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Support: "),a("code",{pre:!0},[s._v("top-right")]),s._v(" / "),a("code",{pre:!0},[s._v("top-left")]),s._v(" / "),a("code",{pre:!0},[s._v("bottom-right")]),s._v(" / "),a("code",{pre:!0},[s._v("bottom-left")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("icon")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("Custom icon class, use an empty string to disable icon.")])])])])]),a("h2",{attrs:{id:"notificationjs"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/tree/master/src/services/notification/notification.js"}},[s._v("notification.js")]),s._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#notificationjs","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),a("p",[s._v("This file has no props.")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.e239e7478315b969fbda.js.map