import { Injectable } from '@angular/core';
import { Point2D } from '../Components/drawing/utils';
@Injectable({
  providedIn: 'root',
})
export class ControlUIService {
  tooltipsActivated = false;
  showTooltip: boolean = false;
  tooltipType: string;

  showConfMat: boolean = true;
  showConfMatLabel: boolean = true;

  showMetrics: boolean = true;

  performanceMode: boolean = false;
  showPerClassMetrics: boolean = false;

  showReference: boolean = false;
  showOverlayReference: boolean = true;

  pos: Point2D;
  constructor() {}

  activate(event: MouseEvent, type: string) {
    this.pos = { x: event.clientX, y: event.clientY };
    this.showTooltip = true && this.tooltipsActivated;
    this.tooltipType = type;
  }
  deactivate() {
    this.showTooltip = false;
  }

  toggleCM() {
    this.showConfMat = !this.showConfMat;
  }
  toggleCMLabel() {
    this.showConfMatLabel = !this.showConfMatLabel;
  }
  toggleMetrics() {
    this.showMetrics = !this.showMetrics;
  }
  togglePerformanceMode() {
    this.performanceMode = !this.performanceMode;
  }
  togglePerClassMetrics() {
    this.showPerClassMetrics = !this.showPerClassMetrics;
  }
  toggleReferenceDisplay() {
    this.showReference = !this.showReference;
  }
  toggleOverlayReference() {
    this.showOverlayReference = !this.showOverlayReference;
  }
}