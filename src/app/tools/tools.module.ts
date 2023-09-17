import { Base64Component } from './base64/base64.component';
import { FxCalcComponent } from './fx-calc/fx-calc.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonTyperComponent } from './json-typer/json-typer.component';
import { MdwriterComponent } from './mdwriter/mdwriter.component';
import { MermaidComponent } from './mermaid/mermaid.component';
import { OpenapiComponent } from './openapi/openapi.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { RegexComponent } from './regex/regex.component';
import { StarNoteComponent } from './star-note/star-note.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolsRoutingModule } from './tools-routing.module';
import { YearCheckComponent } from './year-check/year-check.component';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    ToolsListComponent,
    JsonTyperComponent,
    RealtimeComponent,
    JsonFormatterComponent,
    Base64Component,
    MdwriterComponent,
    RegexComponent,
    YearCheckComponent,
    OpenapiComponent,
    MermaidComponent,
    FxCalcComponent,
    StarNoteComponent,
  ],
  imports: [CommonModule, SharedModule, ToolsRoutingModule],
})
export class ToolsModule {}
