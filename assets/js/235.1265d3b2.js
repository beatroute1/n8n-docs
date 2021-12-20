(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{1413:function(e,o,t){e.exports=t.p+"assets/img/workflow.44f43fab.png"},1414:function(e,o,t){e.exports=t.p+"assets/img/GoogleDriveTrigger_node.07e3ffde.png"},2098:function(e,o,t){"use strict";t.r(o);var r=t(26),i=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"google-drive-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-drive-trigger"}},[e._v("#")]),e._v(" Google Drive Trigger")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://drive.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Drive"),r("OutboundLink")],1),e._v(" is a file storage and synchronization service developed by Google. It allows users to store files on their servers, synchronize files across devices, and share files.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Manual Executions vs. Activation")]),e._v(" "),r("p",[e._v("On manual executions this node will return the last event matching its search criteria. If no event matches the criteria (for example because you are watching for files to be created but no files have been created so far), an error is thrown. Once saved and activated, the node will regularly check for any matching events and will trigger your workflow for each event found.")])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow sends out email notifications when a new file has been uploaded to Google Drive. It uses two nodes:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Google Drive Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SendEmail/"}},[e._v("Send Email")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the image below.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(1413),alt:"A workflow using the Google Drive Trigger and Send Email node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-google-drive-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-google-drive-trigger-node"}},[e._v("#")]),e._v(" 1. Google Drive Trigger node")]),e._v(" "),r("ol",[r("li",[e._v("Enter valid credentials for the Google Drive Trigger node. You can find out how to do so "),r("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select the "),r("code",[e._v("Changes involving a Specific Folder")]),e._v(" option in the "),r("em",[r("strong",[e._v("Trigger On")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Paste the URL of a Google Drive folder in the "),r("em",[r("strong",[e._v("Folder URL or ID")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select "),r("code",[e._v("File Created")]),e._v(" in the "),r("em",[r("strong",[e._v("Watch For")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[e._v("Execute Node")]),e._v(" to execute the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below you can see the file returned by the node.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(1414),alt:"GoogleDriveTrigger_node.png"}})]),e._v(" "),r("h3",{attrs:{id:"_2-send-email-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-send-email-node"}},[e._v("#")]),e._v(" 2. Send Email node")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Enter valid credentials for the Send Email node. You can find out how to do so "),r("RouterLink",{pre:!0,attrs:{to:"/nodes/credentials/SendEmail/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Enter valid emails in the "),r("em",[r("strong",[e._v("From Email")])]),e._v(" and "),r("em",[r("strong",[e._v("To Email")])]),e._v(" fields.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("File Created")]),e._v(" in the "),r("em",[r("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the gear icon next to the "),r("em",[r("strong",[e._v("Text")])]),e._v(" field and choose "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v('A file in your Google Drive file folder has been created: {{$json["name"]}}')]),e._v(" and close the expression editor.")]),e._v(" "),r("li",[e._v("Click on **"),r("em",[e._v("Execute Node")]),e._v(" to execute the node.")])])])])}),[],!1,null,null,null);o.default=i.exports}}]);