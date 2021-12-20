(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1841:function(e,t,o){"use strict";o.r(t);var s=o(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[e._v("#")]),e._v(" XML")]),e._v(" "),s("p",[e._v("The XML node is useful to convert data from and to XML.")]),e._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Mode:")]),e._v(" The format the data should be converted from and to.\n"),s("ul",[s("li",[s("em",[s("strong",[e._v("JSON to XML:")])]),e._v(" Converts data from JSON to XML")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("XML to JSON:")])]),e._v(" Converts data from XML to JSON")])])]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Property Name:")])]),e._v(" The name of the property which contains the data to convert.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Options")])]),e._v(" "),s("ul",[s("li",[s("em",[s("strong",[e._v("Allow Surrogate Chars:")])]),e._v(" Allows using characters from the Unicode surrogate blocks. This field is displayed when 'JSON to XML' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("cdata:")])]),e._v("  Wrap text nodes instead of escaping when necessary. This field is displayed when 'JSON to XML' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Headless:")])]),e._v(" Omit the XML header. This field is displayed when 'JSON to XML' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Root Name:")])]),e._v(" Root element name to be used. This field is displayed when 'JSON to XML' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Explicit Array:")])]),e._v(" Always put child nodes in an array if true; otherwise an array is created. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Explicit Root:")])]),e._v(" Set this if you want to get the root node in the resulting object. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Ignore Attributes:")])]),e._v(" Ignore all XML attributes and only create text nodes. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Merge Attributes:")])]),e._v(" Merge attributes and child elements as properties of the parent, instead of keying attributes off a child attribute object. This option is ignored if 'Ignore Attribute' is true. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Normalize:")])]),e._v(" Trim whitespaces inside the text nodes. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Normalize Tags:")])]),e._v(" Normalize all tag names to lowercase. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Trim:")])]),e._v(" Trim the whitespace at the beginning and end of text nodes. This field is displayed when 'XML to JSON' is selected from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Attribute Key:")])]),e._v(" Prefix that is used to access the attributes.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Character Key:")])]),e._v(" Prefix that is used to access the character content.")])])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to convert the JSON data received from the "),s("a",{attrs:{href:"https://www.thecocktaildb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocktailDB API"),s("OutboundLink")],1),e._v(" to XML. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/661",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("XML")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(752),alt:"A workflow with the XML node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-http-request-node-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),s("ol",[s("li",[e._v("Enter "),s("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(753),alt:"Get random cocktail data from CocktailDB API using the HTTP Request node"}})]),e._v(" "),s("h3",{attrs:{id:"_3-xml-node-json-to-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-xml-node-json-to-xml"}},[e._v("#")]),e._v(" 3. XML node (JSON to XML)")]),e._v(" "),s("ol",[s("li",[e._v("Select 'JSON to XML' from the "),s("em",[s("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(754),alt:"Convert JSON to XML using the XML node"}})])])}),[],!1,null,null,null);t.default=r.exports},752:function(e,t,o){e.exports=o.p+"assets/img/workflow.a524aaf0.png"},753:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.8b847c32.png"},754:function(e,t,o){e.exports=o.p+"assets/img/XML_node.47a202e0.png"}}]);