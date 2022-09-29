import { HostBinding, ElementRef, HostListener, Directive } from "@angular/core";


@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen =false;

    constructor(private elRef: ElementRef){};

    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target);
    }
}