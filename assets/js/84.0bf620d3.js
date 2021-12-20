(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1885:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"copper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copper"}},[e._v("#")]),e._v(" Copper")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.copper.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Copper"),r("OutboundLink")],1),e._v(" is a CRM that focuses on strong integration with Google's G Suite, targeted towards small and medium-sized businesses.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Copper/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.copper"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create, update, and get a person from Copper. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1021",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Copper")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(870),alt:"A workflow with the Copper node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-copper-node-create-person"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-copper-node-create-person"}},[e._v("#")]),e._v(" 2. Copper node (create: person)")]),e._v(" "),r("p",[e._v("This node will create a new person in Copper.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Copper node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Copper/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Person' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the name of the lead in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Emails' from the dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Email")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Enter the email in the "),r("em",[r("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the category of the email in the "),r("em",[r("strong",[e._v("Category")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new person in Copper.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(871),alt:"Using the Copper node to create a new person"}})]),e._v(" "),r("h3",{attrs:{id:"_3-copper1-node-update-person"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-copper1-node-update-person"}},[e._v("#")]),e._v(" 3. Copper1 node (update: person)")]),e._v(" "),r("p",[e._v("This node will update the information of the person that we created using the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous Copper node.")]),e._v(" "),r("li",[e._v("Select 'Person' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Person ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Phone Numbers' from the dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Phone Number")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the phone number in the "),r("em",[r("strong",[e._v("Phone Number")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter the category in the "),r("em",[r("strong",[e._v("Category")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the information of the person that got created previously.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(872),alt:"Using the Copper node to update the information of a person"}})]),e._v(" "),r("h3",{attrs:{id:"_4-copper2-node-get-person"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-copper2-node-get-person"}},[e._v("#")]),e._v(" 4. Copper2 node (get: person)")]),e._v(" "),r("p",[e._v("This node will retrieve the information of the person that we created earlier.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous Copper node.")]),e._v(" "),r("li",[e._v("Select 'Person' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Person ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node retrieves the information of the person that we created earlier.")]),e._v(" "),r("p",[r("img",{pre:!0,attrs:{src:o(873),alt:"Using the Copper node to retrieve the information of a person"}})])])],1)}),[],!1,null,null,null);t.default=n.exports},870:function(e,t,o){e.exports=o.p+"assets/img/workflow.8c0c97da.png"},871:function(e,t,o){e.exports=o.p+"assets/img/Copper_node.1d5d189e.png"},872:function(e,t,o){e.exports=o.p+"assets/img/Copper1_node.70050a7b.png"},873:function(e,t,o){e.exports=o.p+"assets/img/Copper2_node.4e9ba080.png"}}]);