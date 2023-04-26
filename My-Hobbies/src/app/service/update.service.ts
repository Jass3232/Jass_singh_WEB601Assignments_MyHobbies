import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    this.checkForUpdates();
  }
  public checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        const message = 'An update is available. Do you want to reload the page?';
        const action = 'Reload';
        this.snackBar.open(message, action).onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => window.location.reload());
        });
      });
      this.swUpdate.checkForUpdate();
    }
  }
}
