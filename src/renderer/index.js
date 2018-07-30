//

import 'webix';
import 'webix/skins/compact.css';

// const styles=document.createElement('style');
// styles.innerText="@import url('file://webix.css');";

webix.ready(function() {
	webix.ui({
		rows: [
			{ view:'toolbar', elements: [
				{ view:'label', label:'Webix' },
				{ view:'button', label:'Click', align:'right', id:'button', autowidth: true }
			]},
			{ cols: [
					{
						view: 'list', id:'list', select: true, data: [
							{ id: 1, value:"One" },
							{ id: 2, value:"Two" },
							{ id: 3, value:"Three" },
							{ id: 4, value:"Four" },
							{ id: 5, value:"Five" },
						]
					},
					{ view: 'resizer' },
					{ rows: [
							{
								view:'template',
								template: "hello Webix !"
							},
						]
					}
				]
			}
		],
	});

	$$('button').attachEvent('onItemClick', function() {
		webix.alert('clicked');
	});

	$$('list').attachEvent('onItemClick', function(id) {
		webix.message('clicked on ' + id);
	});
})

