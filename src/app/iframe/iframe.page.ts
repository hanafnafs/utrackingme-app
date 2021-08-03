import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser/ngx";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-iframe",
  templateUrl: "./iframe.page.html",
  styleUrls: ["./iframe.page.scss"],
})
export class IframePage implements OnInit {
  type;
  url = "https://www.utrackingme.com";
  public loading: any;
  constructor(
    private routes: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private iab: InAppBrowser
  ) {
    this.showLoadingSpinner();
    // this.trustUrl(this.url);
    setTimeout(() => {
      this.dismissLoading();
    }, 2000);
  }

  trustUrl() {
    let browserOptions: InAppBrowserOptions = new Object();
    browserOptions.hideurlbar = "yes";
    browserOptions.hidenavigationbuttons = "yes";
    const browser = this.iab.create(this.url, "_self", browserOptions);
    browser.on("loadstop").subscribe((data) => {});
    browser.show();
  }

  ngOnInit() {
    // this.routes.queryParams.subscribe((params) => {
    //   if (params) {
    //     console.log(params);
    //     this.type = params.type;
    //     console.log(this.type);
    //   }
    // });
  }

  public async showLoadingSpinner() {
    this.loading = await this.loadingCtrl.create({
      spinner: "bubbles",
      // dismissOnPageChange: true,
      // message: `
      // <div class="custom-spinner-container">
      //   <div class="custom-spinner-box">
      //     <img src="./assets/imgs/loading.svg" width="100" height="100">
      //   </div>
      // </div>`
    });
    this.loading.present();
    return this.loading;
  }

  ///DISMISS LOADING SPINNER///
  public dismissLoading() {
    this.loadingCtrl.dismiss();
  }
}
