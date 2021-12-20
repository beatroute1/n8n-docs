(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1292:function(e,t,o){e.exports=o.p+"assets/img/workflow.1f694915.png"},1293:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.814a3333.png"},1294:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.e191f13f.png"},1295:function(e,t,o){e.exports=o.p+"assets/img/Telegram_node.f7fa8949.png"},2038:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"telegram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[e._v("#")]),e._v(" Telegram")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://telegram.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram"),a("OutboundLink")],1),e._v(" is a cloud-based instant messaging and voice-over-IP service.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.telegram"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to send a cocktail recipe to a specified chat ID every day via a Telegram bot. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/781",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Telegram")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1292),alt:"A workflow with the Telegram node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-cron-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),a("p",[e._v("The Cron node will trigger the workflow daily at 8 PM.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),a("li",[e._v("Set hours to "),a("code",[e._v("20")]),e._v(" in the "),a("em",[a("strong",[e._v("Hour")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the Cron node is configured to trigger the workflow every day at 8 PM.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1293),alt:"Using the Cron node to trigger the workflow daily at 8 PM"}})]),e._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),a("p",[e._v("This node will make a GET request to the API "),a("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" to fetch a random cocktail. This information gets passed on to the next node in the workflow.")]),e._v(" "),a("ol",[a("li",[e._v("Enter "),a("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns information about a random cocktail.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1294),alt:"Using the HTTP Request node to get the information about a random cocktail"}})]),e._v(" "),a("h3",{attrs:{id:"_3-telegram-node-sendphoto-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-telegram-node-sendphoto-message"}},[e._v("#")]),e._v(" 3. Telegram node (sendPhoto: message)")]),e._v(" "),a("p",[e._v("This node will send a message on Telegram with an image and the recipe of the cocktail that we got from the previous node.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Telegram node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"2"}},[a("li",[e._v("Select 'Send Photo' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the target chat ID in the "),a("em",[a("strong",[e._v("Chat ID")])]),e._v(" field. Refer to the "),a("a",{pre:!0,attrs:{href:"#how-do-i-get-a-chat-id"}},[e._v("FAQs")]),e._v(" to learn how to get the chat ID.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Photo")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > drinks > [item: 0] > strDrinkThumb. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].json["drinks"][0]["strDrinkThumb"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" and select 'Caption' from the dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Caption")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > drinks > [item: 0] > strInstructions. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].json["drinks"][0]["strInstructions"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sends a message on Telegram with an image and the recipe of the cocktail.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1295),alt:"Using the Telegram node to send a message with an image and instruction of a cocktail"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("This example workflow uses the Cron node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Cron node.")])]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"how-can-i-send-more-than-30-messages-per-second"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-send-more-than-30-messages-per-second"}},[e._v("#")]),e._v(" How can I send more than 30 messages per second?")]),e._v(" "),a("p",[e._v("The Telegram API has a "),a("a",{attrs:{href:"https://core.telegram.org/bots/faq#broadcasting-to-users",target:"_blank",rel:"noopener noreferrer"}},[e._v("limitation"),a("OutboundLink")],1),e._v(" of sending only 30 messages per second. Follow the steps mentioned below to send more than 30 messages:")]),e._v(" "),a("ol",[a("li",[e._v("Split In Batches node: Use the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SplitInBatches/"}},[e._v("Split in Batches")]),e._v(" node to get at most 30 chat IDs from your database.")],1),e._v(" "),a("li",[e._v("Telegram node: Connect the Telegram node with the Split In Batches node. Use the "),a("em",[a("strong",[e._v("Expression Editor")])]),e._v(" to select the Chat IDs from the Split in Batches node.")]),e._v(" "),a("li",[e._v("Function node: Connect the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")]),e._v(" node with the Telegram node. Use the Function node to wait for a few seconds before fetching the next batch of chat IDs. Connect this node with the Split In Batches node.")],1)]),e._v(" "),a("p",[e._v("You can also use this "),a("a",{attrs:{href:"https://n8n.io/workflows/772",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"how-do-i-add-a-bot-to-a-telegram-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-add-a-bot-to-a-telegram-channel"}},[e._v("#")]),e._v(" How do I add a bot to a Telegram channel?")]),e._v(" "),a("ol",[a("li",[e._v("In the Telegram app, access the target channel and tap on the channel name.")]),e._v(" "),a("li",[e._v('Make sure that the channel name is labeled as "public channel".')]),e._v(" "),a("li",[e._v("Tap on "),a("em",[a("strong",[e._v("Administrators")])]),e._v(" and then on "),a("em",[a("strong",[e._v("Add Admin")])]),e._v(".")]),e._v(" "),a("li",[e._v("Search for the username of the bot and select it.")]),e._v(" "),a("li",[e._v("Tap on the checkmark on the top-right corner to add the bot to the channel.")])]),e._v(" "),a("h3",{attrs:{id:"how-do-i-get-the-chat-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-the-chat-id"}},[e._v("#")]),e._v(" How do I get the Chat ID?")]),e._v(" "),a("p",[e._v("There are two ways to get the Chat ID in Telegram.")]),e._v(" "),a("ul",[a("li",[e._v("Using the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TelegramTrigger/"}},[e._v("Telegram Trigger")]),e._v(" node: On successful execution, the Telegram Trigger node returns a Chat ID. You can use the Telegram Trigger node in your workflow to get a Chat ID.")],1),e._v(" "),a("li",[e._v("Using the "),a("code",[e._v("@RawDataBot")]),e._v(": The "),a("code",[e._v("@RawDataBot")]),e._v(" returns the raw data of the chat with a Chat ID. Invite the "),a("code",[e._v("@RawDataBot")]),e._v(" to your channel/group, and upon joining, it will output a Chat ID along with other information. Be sure to remove the "),a("code",[e._v("@RawDataBot")]),e._v(" from your group/channel afterwards.")])]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=n.exports}}]);