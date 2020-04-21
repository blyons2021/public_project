import { Component, OnInit } from '@angular/core';
import { JobListingService, Company } from './job-listing.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  companies: Company[];
  constructor(private readonly jobListingService: JobListingService) { }

  ngOnInit(): void {
    this.populate();
  }
  private populate(){
    this.jobListingService.getCompanies().subscribe(
      (companies: Company[]) =>this.companies = companies
    )
  }
}
