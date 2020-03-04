import { Component } from "@angular/core";

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";

import { HttpParams, HttpClient } from "@angular/common/http";
import { tap, map, catchError } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  url = "http://localhost:8080/hello";
  title = "angular-rtb-blog-app";

  editorStyle = {
    height: "200px"
  };

  form: FormGroup = this.fb.group({
    html: new FormControl(
      '<div>test</div><ul><li>1</li><li class="ql-indent-1">1-1</li><li>2</li><ol><li>numbered</li><li class="ql-indent-1">numbered-1</li></ol></ul><div><br></div>'
    )
  });

  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.form
        .get("html")
        .patchValue(
          '<ol><li><sup>test</sup></li></ol><div><a href="https://google.de" rel="noopener noreferrer" target="_blank">asdfasdf</a></div>'
        );
    }, 4000);
  }

  byPassHTML(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onSubmit(content: string) {
    console.log(content);
    this.http.get(`${this.url}/characters`).pipe(tap(console.log));
  }
}
