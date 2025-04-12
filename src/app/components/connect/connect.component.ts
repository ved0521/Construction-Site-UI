import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})

export class ConnectComponent implements AfterViewInit {

  @ViewChild('iframeElement')
    iframeElement!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.loadHubSpotScriptInsideIframe();
  }
  private loadHubSpotScriptInsideIframe(): void {
    if (this.iframeElement) {
      const iframe = this.iframeElement.nativeElement;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Create the container element inside the iframe
      const customFormContainer = iframeDoc.createElement('div');
      customFormContainer.id = 'custom-form-container';
      customFormContainer.classList.add('flex', 'h-full', 'w-full');

      // Append the container to the iframe body
      iframeDoc.body.appendChild(customFormContainer);

      // Create the script element
      const script = this.renderer.createElement('script');
      script.src = 'https://localhost:7284/js/site.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.setAttribute('data-target', '#custom-form-container');

      // Append the script to the iframe body
      iframeDoc.body.appendChild(script);

      script.onload = () => {
        console.log('Script loaded inside iframe');
      };
    } else {
      console.error('Iframe element not found');
    }
  }


}







