import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import {AppComponent} from './app/app.component'
import { Component } from '@angular/core';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { provideRouter, Routes } from '@angular/router';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [
    {path: '', component: NotesListComponent},
    {path: 'new', component: AddNoteComponent},
    {path: 'note/:id', component: NoteDetailComponent}
]

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)],
});