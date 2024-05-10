import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { NOTES } from "../notes";


@Component({
    selector: 'app-note-detail',
    standalone: true,
    templateUrl: './note-detail.component.html',
    styleUrl: './note-detail.component.css',
    imports: [RouterModule],
})
export class NoteDetailComponent {
    activeRoute = inject(ActivatedRoute);
    id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((i) => i.id === this.id);

    router = inject(Router);

    deleteNote(){
        if(this.note){
            let delNote = NOTES.indexOf(this.note, 0);
            NOTES.splice(delNote, 1);
        }
        this.router.navigateByUrl('');
    }
}