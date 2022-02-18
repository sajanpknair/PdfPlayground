import { Component, OnInit } from '@angular/core';
declare var Tesseract;

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
    // Variable to store shortLink from api response

    file: File = null; // Variable to store file
    //UNCOMMENT THE BELOW TWO LINES
    textResult: any = ''; //Variable to store result
    isLoading: boolean = false;
  
    // Inject service 
    constructor() { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event) {
        this.isLoading = true;
        this.textResult = "";
        this.file = event.target.files[0];
        Tesseract.recognize(this.file).then(result => {
            this.textResult = result.text;
            this.isLoading = false;   
            });    
    }
}