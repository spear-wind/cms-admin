import {Component} from '@angular/core';

@Component({
	selector: 'topnav',
	templateUrl: './app/widgets/topnav/topnav.component.html'
})

export class TopNavComponent {
	//TODO: update with real data
	currentSite = 'http://spearwind.io';
	sites = ['http://spearwind.io','http://therealestatecrm.com'];

	changeSite(event:any) {
		this.currentSite = event.target.value;
	}

}
