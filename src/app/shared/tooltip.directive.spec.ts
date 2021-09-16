import {TooltipDirective} from './tooltip.directive';
import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template:
    `
      <button tooltip="test"></button>
    `
})
class TestTooltipDirectiveComponent {
}

describe('TooltipDirective', () => {

  let fixture: ComponentFixture<TestTooltipDirectiveComponent>;
  let des: DebugElement[];

  // #docregion selected-tests
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TooltipDirective, TestTooltipDirectiveComponent]
    })
      .createComponent(TestTooltipDirectiveComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(TooltipDirective));

  });

  it('should one tooltip element', () => {
    expect(des.length).toBe(1);
  });

  // attached TooltipDirective should be listed in the button
  it('should have `TooltipDirective` in 1st <button> providerTokens', () => {
    expect(des[0].providerTokens).toContain(TooltipDirective);
  });

  // attached TooltipDirective can be injected
  it('can inject `TooltipDirective` in 1st <button>', () => {
    const dir = des[0].injector.get(TooltipDirective);
    expect(dir).toBeTruthy();
  });

  it('should hover <button> tooltip', () => {
    // easier to work with nativeElement
    const button = des[0].nativeElement as HTMLInputElement;

    button.dispatchEvent(new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    fixture.detectChanges();

    let toolTip = fixture.debugElement.queryAll(By.css('.ng-tooltip-show'));
    expect(toolTip[0]).toBeTruthy();

    button.dispatchEvent(new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
    }));

    toolTip = fixture.debugElement.queryAll(By.css('.ng-tooltip-show'));
    expect(toolTip[0]).toBeFalsy();

  });


});
