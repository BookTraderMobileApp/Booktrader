import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sell',
  templateUrl: 'sell.page.html',
  styleUrls: ['sell.page.scss']
})
export class SellPage implements OnInit {

  images: any;
  categories: any;
  brands: any;
  conditions: any;
  selectedCategory: any;
  selectedBrand: any;
  selectedCondition: any;

  constructor(private camera: Camera, public alertController: AlertController, private dataService: DataService ) {}

  ngOnInit() {
    this.images = [];
    this.categories = this.dataService.getSubCategories();
    this.brands = this.dataService.getBrands();
    this.conditions = this.dataService.getConditions();

  }

  async addPhoto(source: string) {

    if (source === 'library') {

      const libraryImage = await this.openLibrary();
      this.images.push ('data:image/jpg;base64,' + libraryImage);
      this.images.reverse();

    } else {
      const cameraImage = await this.openCamera();
      this.images.push ('data:image/jpg;base64,' + cameraImage);
      this.images.reverse();
    }
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }


  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      buttons: [
        {
          text: 'Take photo',
          handler: () => {
            this.addPhoto('camera');
          }
        }, {
          text: 'Choose from photo gallery',
          handler: () => {
            this.addPhoto('library');
          }
        }
            ]
    });

    await alert.present();
  }


  deletePhoto(index) {
    this.images.splice(index, 1);
 }


 categoryChange($event) {
 }

 brandChange($event) {
}

 conditionChange($event) {
}


}
