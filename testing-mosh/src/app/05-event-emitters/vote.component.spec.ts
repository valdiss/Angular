import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((received)=>{
      totalVotes = received;
    });

    component.upVote();

    // expect(totalVotes).not.toBe(null);
    expect(totalVotes).toBe(1);
  });
});
