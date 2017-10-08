import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { VoterComponent } from "./voter.component";

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let debug = fixture.debugElement.query(By.css('.vote-count'));
    let el : HTMLElement = debug.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have Upvoted', ()=>{
    component.myVote = 1;
    fixture.detectChanges();

    let debug = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debug.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when upvote clicked', ()=>{
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
