import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input() text = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (!Number(this.text)) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
