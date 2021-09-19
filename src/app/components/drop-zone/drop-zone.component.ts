import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent implements OnInit {

  @Input() description = 'Drag and drop file here';
  @Input() buttonText = 'Browse for file';
  @Output() dropped = new EventEmitter<FileList>();

  constructor() { }

  ngOnInit(): void {
  }

  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.dropped.emit($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(target: any) {

    let files: any = target.files;
    this.dropped.emit(files);
  }


}
