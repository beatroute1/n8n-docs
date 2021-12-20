(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1103:function(e,t,o){e.exports=o.p+"assets/img/workflow.22b8e132.png"},1104:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams_node.ecb302fd.png"},1105:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams1_node.62aff7d2.png"},1106:function(e,t,o){e.exports=o.p+"assets/img/MicrosoftTeams2_node.49657200.png"},1971:function(e,t,o){"use strict";o.r(t);var s=o(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"microsoft-teams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-teams"}},[e._v("#")]),e._v(" Microsoft Teams")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://teams.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Teams"),s("OutboundLink")],1),e._v(" is a business-oriented communication and collaboration platform that combines workplace chat, video meetings, file storage , and application integration.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.microsoftTeams"}}),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create, update and send a message to a channel in Microsoft Teams. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/680",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Microsoft Teams")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1103),alt:"A workflow with the Microsoft Teams node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-microsoft-teams-node-create-channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-microsoft-teams-node-create-channel"}},[e._v("#")]),e._v(" 2. Microsoft Teams node (create: channel)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Microsoft Teams node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select the team that you want to use from the "),s("em",[s("strong",[e._v("Team ID")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter a name for the channel in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(1104),alt:"Create a channel with the Microsoft Teams node"}})]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_3-microsoft-teams1-node-update-channel"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-microsoft-teams1-node-update-channel"}},[e._v("#")]),e._v(" 3. Microsoft Teams1 node (update: channel)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Update' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Team ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Parameters > teamId. You can also add the following expression: "),s("code",[e._v('{{$node["Microsoft Teams"].parameter["teamId"]}}')])]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Channel ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Output > JSON > id. You can also add the following expression: "),s("code",[e._v('{{$node["Microsoft Teams"].json["id"]}}')])]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" button and select 'Name' from the dropdown list.")]),e._v(" "),s("li",[e._v("Enter a new channel name in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{pre:!0,attrs:{src:o(1105),alt:"Update a Channel with the Microsoft Teams node"}})])]),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_4-microsoft-teams2-node-create-channelmessage"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-microsoft-teams2-node-create-channelmessage"}},[e._v("#")]),e._v(" 4. Microsoft Teams2 node (create: channelMessage)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Channel Message (Beta)' from the "),s("em",[s("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Team ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Parameters > teamId. You can also add the following expression: "),s("code",[e._v('{{$node["Microsoft Teams"].parameter["teamId"]}}')])]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Channel ID")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Microsoft Teams > Output > JSON > id. You can also add the following expression: "),s("code",[e._v('{{$node["Microsoft Teams"].json["id"]}}')])]),e._v(" "),s("li",[e._v("Select 'Text' from the "),s("em",[s("strong",[e._v("Message Type")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter a message in the "),s("em",[s("strong",[e._v("Message")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{pre:!0,attrs:{src:o(1106),alt:"Send a message with the Microsoft Teams node"}})])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);