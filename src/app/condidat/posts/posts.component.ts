import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Postulation } from '../../models/postulation.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
constructor(private candidateService : CandidateService){}
posts : Postulation[] = []
id : string | null = localStorage.getItem('id')
ngOnInit(): void {
  this.getAllPosts()
}

getAllPosts(){
  this.candidateService.getPosts().subscribe(posts => {
    this.posts = posts.filter(postulation => postulation.candidate_id === this.id)
  })
}

}
