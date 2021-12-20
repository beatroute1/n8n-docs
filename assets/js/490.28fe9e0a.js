(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1562:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maintenance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maintenance"}},[t._v("#")]),t._v(" Maintenance")]),t._v(" "),e("h2",{attrs:{id:"executions-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executions-data"}},[t._v("#")]),t._v(" Executions data")]),t._v(" "),e("p",[t._v("Depending on your executions settings and volume, your n8n database can quickly swell in size and eventually run out of storage.")]),t._v(" "),e("p",[t._v("To avoid this and ensure continued proper functionality, it is recommended to ensure you are only saving the desired data and to enable pruning of old executions data.")]),t._v(" "),e("p",[t._v("This is done by "),e("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html"}},[t._v("configuring")]),t._v(" the corresponding "),e("RouterLink",{attrs:{to:"/reference/environment-variables.html#executions"}},[t._v("environment variables")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"saved-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#saved-data"}},[t._v("#")]),t._v(" Saved data")]),t._v(" "),e("p",[t._v("You can select which executions data is saved, for example only those executions that result in an "),e("code",[t._v("Error")]),t._v(", so that only those records you want to keep are saved in the database.")]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"npm"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("// Save executions ending "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" errors\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_ERROR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all\n\n// Save successful executions\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_SUCCESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all\n\n// Don"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t save node progress for each execution\nexport EXECUTIONS_DATA_SAVE_ON_PROGRESS=false\n\n// Don'")]),t._v("t save manually launched executions\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"Docker"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_ERROR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_SUCCESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_PROGRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"docker-compose.yaml"}},[e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("n8n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_SAVE_ON_ERROR=all\n\t  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_SAVE_ON_SUCCESS=none\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_SAVE_ON_PROGRESS=true\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=false\n")])])])])],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),e("p",[t._v("These settings can also be configured on an individual workflow basis via the "),e("RouterLink",{attrs:{to:"/getting-started/key-components/workflow.html#workflow-settings"}},[t._v("workflow settings")]),t._v(".")],1)]),t._v(" "),e("h3",{attrs:{id:"enable-data-pruning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-data-pruning"}},[t._v("#")]),t._v(" Enable data pruning")]),t._v(" "),e("p",[t._v("You can enable data pruning to automatically delete execution data older than a desired time period. If no "),e("code",[t._v("EXECUTIONS_DATA_MAX_AGE")]),t._v(" is set, then 336 hours (14 days) is used by default.")]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"npm"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("// Activate automatic data pruning\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_PRUNE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n// Number of hours after execution data will be deleted\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_MAX_AGE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"Docker"}},[e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_PRUNE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\t-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_MAX_AGE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n\tn8nio/n8n\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"docker-compose.yaml"}},[e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("n8n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_PRUNE=true\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" EXECUTIONS_DATA_MAX_AGE=168\n")])])])])],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),e("p",[t._v("If you are running n8n using the default SQLite database, the disk-space of any pruned data is not automatically freed up but rather reused for future executions data. To free up this space configure the "),e("code",[t._v("DB_SQLITE_VACUUM_ON_STARTUP")]),t._v(" "),e("RouterLink",{attrs:{to:"/reference/environment-variables.html#sqlite"}},[t._v("environment variable")]),t._v(" or manually run the "),e("a",{attrs:{href:"https://www.sqlite.org/lang_vacuum.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VACUUM"),e("OutboundLink")],1),t._v(" operation.")],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);