import { TooltipDirective } from './tooltip.directive';
import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template:
   `
      <button tooltip="test"></button>
   `
})
class TestTooltipDirectiveComponent { }

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<TestTooltipDirectiveComponent>;
  let des: DebugElement[];  // the three elements w/ the directive

  // #docregion selected-tests
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TooltipDirective, TestTooltipDirectiveComponent ]
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
  it('should have `HighlightDirective` in 1st <button> providerTokens', () => {
    expect(des[0].providerTokens).toContain(TooltipDirective);
  });

});
