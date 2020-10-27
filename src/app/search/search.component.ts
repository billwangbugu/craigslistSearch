import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  searchQuery = '';

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }
  search(){
    // This is not work.
    this.searchService.searchResult(this.searchQuery).subscribe(res=>{ console.log(res)})
    this.router.navigate(['/result']);
  }
  onKey(event: any) { // without type info
    this.searchQuery = event.target.value ;
  }
}
