import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecyclestudyComponent } from './componentstudy/lifecyclestudy/lifecyclestudy.component';
import { Directive1DemoComponent } from './componentstudy/directive1-demo/directive1-demo.component';
import {InputDemo1Component} from "./componentstudy/input-demo1/input-demo1.component";
import {SubjectObserveDemoComponent} from "./componentstudy/subject-observe-demo/subject-observe-demo.component";
import {EventStudyComponent} from "./componentstudy/event-study/event-study.component";
import {BuildinComponent} from "./directives/buildin/buildin.component";
import {HighlightComponent} from "./directives/highlight/highlight.component";

const routes: Routes = [
  { path: 'lifecyclestudy', component: LifecyclestudyComponent },
  { path: 'directive1', component: Directive1DemoComponent },
  { path: 'inputdemo1', component: InputDemo1Component },
  { path: 'subjectobservestudy', component: SubjectObserveDemoComponent },
  { path: 'eventStudy', component: EventStudyComponent },
  { path: 'buildinstudy', component: BuildinComponent },
  { path: 'highlightstudy', component: HighlightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
