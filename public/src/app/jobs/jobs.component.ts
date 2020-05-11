import { Component, OnInit } from '@angular/core';
import { JobListingService, Company } from './job-listing.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  companies: Company[];
  companiesData: Company[];
  constructor(private readonly jobListingService: JobListingService) { }

  ngOnInit(): void {
    this.populate();
  }
  filter(filterValue: string){
    this.companiesData = this.companies.filter(c => c.name.toLowerCase().indexOf(filterValue.trim().toLowerCase()) > -1);
  }
  private populate(){
    this.jobListingService.getCompanies().subscribe(
      (companies: Company[]) => {
        this.companies = companies;
        this.companiesData = companies;
      }
    )
  }
}
